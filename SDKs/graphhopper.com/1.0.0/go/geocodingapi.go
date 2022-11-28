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

type GeocodingAPI struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewGeocodingAPI(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *GeocodingAPI {
	return &GeocodingAPI{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetGeocode - Geocoding Endpoint
//
// ### Introduction
//
// ![Geocoding Example](./img/geocoding-example.png)
//
// _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`).
// For example the conversion from `Berlin` to `52.5170365,13.3888599`.
//
// _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding).
func (s *GeocodingAPI) GetGeocode(ctx context.Context, request operations.GetGeocodeRequest) (*operations.GetGeocodeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/geocode"

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

	res := &operations.GetGeocodeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GeocodingResponse = out
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
