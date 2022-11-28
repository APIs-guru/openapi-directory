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

type Beaconinfo struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBeaconinfo(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Beaconinfo {
	return &Beaconinfo{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ProximitybeaconBeaconinfoGetforobserved - Given one or more beacon observations, returns any beacon information and attachments accessible to your application. Authorize by using the [API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key) for the application.
func (s *Beaconinfo) ProximitybeaconBeaconinfoGetforobserved(ctx context.Context, request operations.ProximitybeaconBeaconinfoGetforobservedRequest) (*operations.ProximitybeaconBeaconinfoGetforobservedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1beta1/beaconinfo:getforobserved"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProximitybeaconBeaconinfoGetforobservedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GetInfoForObservedBeaconsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetInfoForObservedBeaconsResponse = out
		}
	}

	return res, nil
}
