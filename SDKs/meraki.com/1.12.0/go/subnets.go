package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Subnets struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSubnets(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Subnets {
	return &Subnets{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetDeviceApplianceDhcpSubnets - Return the DHCP subnet information for an appliance
// Return the DHCP subnet information for an appliance
func (s *Subnets) GetDeviceApplianceDhcpSubnets(ctx context.Context, request operations.GetDeviceApplianceDhcpSubnetsRequest) (*operations.GetDeviceApplianceDhcpSubnetsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/devices/{serial}/appliance/dhcp/subnets", request.PathParams)

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

	res := &operations.GetDeviceApplianceDhcpSubnetsResponse{
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

			res.GetDeviceApplianceDhcpSubnets200ApplicationJSONObject = out
		}
	}

	return res, nil
}
