package operations

type GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest struct {
	PathParams GetNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams
}

type GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse struct {
	ContentType                                                           string
	StatusCode                                                            int64
	GetNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject map[string]interface{}
}
