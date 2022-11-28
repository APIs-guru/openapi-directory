package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type SubnetPool struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSubnetPool(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SubnetPool {
	return &SubnetPool{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkCellularGatewaySubnetPool - Return the subnet pool and mask configured for MGs in the network.
// Return the subnet pool and mask configured for MGs in the network.
func (s *SubnetPool) GetNetworkCellularGatewaySubnetPool(ctx context.Context, request operations.GetNetworkCellularGatewaySubnetPoolRequest) (*operations.GetNetworkCellularGatewaySubnetPoolResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/subnetPool", request.PathParams)

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

	res := &operations.GetNetworkCellularGatewaySubnetPoolResponse{
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

			res.GetNetworkCellularGatewaySubnetPool200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkCellularGatewaySubnetPool - Update the subnet pool and mask configuration for MGs in the network.
// Update the subnet pool and mask configuration for MGs in the network.
func (s *SubnetPool) UpdateNetworkCellularGatewaySubnetPool(ctx context.Context, request operations.UpdateNetworkCellularGatewaySubnetPoolRequest) (*operations.UpdateNetworkCellularGatewaySubnetPoolResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/subnetPool", request.PathParams)

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

	res := &operations.UpdateNetworkCellularGatewaySubnetPoolResponse{
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

			res.UpdateNetworkCellularGatewaySubnetPool200ApplicationJSONObject = out
		}
	}

	return res, nil
}
