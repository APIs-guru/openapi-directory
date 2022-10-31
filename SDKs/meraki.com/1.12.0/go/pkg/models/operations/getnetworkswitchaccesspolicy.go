package operations

type GetNetworkSwitchAccessPolicyPathParams struct {
	AccessPolicyNumber string `pathParam:"style=simple,explode=false,name=accessPolicyNumber"`
	NetworkID          string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSwitchAccessPolicyRequest struct {
	PathParams GetNetworkSwitchAccessPolicyPathParams
}

type GetNetworkSwitchAccessPolicyResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetNetworkSwitchAccessPolicy200ApplicationJSONObject map[string]interface{}
}
