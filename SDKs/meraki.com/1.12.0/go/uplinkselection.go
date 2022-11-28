package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type UplinkSelection struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewUplinkSelection(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *UplinkSelection {
	return &UplinkSelection{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkApplianceTrafficShapingUplinkSelection - Show uplink selection settings for an MX network
// Show uplink selection settings for an MX network
func (s *UplinkSelection) GetNetworkApplianceTrafficShapingUplinkSelection(ctx context.Context, request operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest) (*operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkApplianceTrafficShapingUplinkSelection - Update uplink selection settings for an MX network
// Update uplink selection settings for an MX network
func (s *UplinkSelection) UpdateNetworkApplianceTrafficShapingUplinkSelection(ctx context.Context, request operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest) (*operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject = out
		}
	}

	return res, nil
}
