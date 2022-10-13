package operations

type GetNetworkSwitchStacksPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSwitchStacksRequest struct {
	PathParams GetNetworkSwitchStacksPathParams
}

type GetNetworkSwitchStacksResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetNetworkSwitchStacks200ApplicationJSONObject map[string]interface{}
}
