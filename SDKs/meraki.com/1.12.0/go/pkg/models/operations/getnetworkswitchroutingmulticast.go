package operations

type GetNetworkSwitchRoutingMulticastPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSwitchRoutingMulticastRequest struct {
	PathParams GetNetworkSwitchRoutingMulticastPathParams
}

type GetNetworkSwitchRoutingMulticastResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	GetNetworkSwitchRoutingMulticast200ApplicationJSONObject map[string]interface{}
}
