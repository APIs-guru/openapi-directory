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

type V1beta1 struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewV1beta1(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *V1beta1 {
	return &V1beta1{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ProximitybeaconGetEidparams - Gets the Proximity Beacon API's current public key and associated parameters used to initiate the Diffie-Hellman key exchange required to register a beacon that broadcasts the Eddystone-EID format. This key changes periodically; clients may cache it and re-use the same public key to provision and register multiple beacons. However, clients should be prepared to refresh this key when they encounter an error registering an Eddystone-EID beacon.
func (s *V1beta1) ProximitybeaconGetEidparams(ctx context.Context, request operations.ProximitybeaconGetEidparamsRequest) (*operations.ProximitybeaconGetEidparamsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1beta1/eidparams"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ProximitybeaconGetEidparamsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EphemeralIDRegistrationParams
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EphemeralIDRegistrationParams = out
		}
	}

	return res, nil
}
