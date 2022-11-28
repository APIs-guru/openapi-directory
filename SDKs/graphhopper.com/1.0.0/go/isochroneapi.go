package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type IsochroneAPI struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewIsochroneAPI(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *IsochroneAPI {
	return &IsochroneAPI{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetIsochrone - Isochrone Endpoint
// ### Example
// You can get an example response via:
//
// ```
// curl "https://graphhopper.com/api/1/isochrone?point=51.131108,12.414551&key=[YOUR_KEY]"
// ```
//
// Don't forget to replace the placeholder with your own key.
//
// ### Introduction
// ![Isochrone screenshot](./img/isochrone-example.png)
//
// An isochrone of a location is ”a line connecting points at which a vehicle arrives at the same time”, see Wikipedia.
// With the same API you can also calculate isodistances, just use the parameter distance_limit instead of time_limit`.
//
// ### Use Cases
// Some possible areas in which this API may be useful to you:
//
// - real estate analysis
// - realtors
// - vehicle scheduling
// - geomarketing
// - reach of electric vehicles
// - transport planning
// - logistics (distribution and retail network planning)
//
// ### API Clients and Examples
// See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#isochrone).
func (s *IsochroneAPI) GetIsochrone(ctx context.Context, request operations.GetIsochroneRequest) (*operations.GetIsochroneResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/isochrone"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetIsochroneResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.IsochroneResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IsochroneResponse = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GhError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GhError = out
		}
	}

	return res, nil
}
