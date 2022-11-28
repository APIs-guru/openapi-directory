package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type UplinkBandwidth struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewUplinkBandwidth(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *UplinkBandwidth {
	return &UplinkBandwidth{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkApplianceTrafficShapingUplinkBandwidth - Returns the uplink bandwidth settings for your MX network.
// Returns the uplink bandwidth settings for your MX network.
func (s *UplinkBandwidth) GetNetworkApplianceTrafficShapingUplinkBandwidth(ctx context.Context, request operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest) (*operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", request.PathParams)

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

	res := &operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse{
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

			res.GetNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkApplianceTrafficShapingUplinkBandwidth - Updates the uplink bandwidth settings for your MX network.
// Updates the uplink bandwidth settings for your MX network.
func (s *UplinkBandwidth) UpdateNetworkApplianceTrafficShapingUplinkBandwidth(ctx context.Context, request operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest) (*operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", request.PathParams)

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

	res := &operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse{
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

			res.UpdateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJSONObject = out
		}
	}

	return res, nil
}
