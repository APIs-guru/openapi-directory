package operations

type GetNetworkSwitchRoutingOspfPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkSwitchRoutingOspfRequest struct {
	PathParams GetNetworkSwitchRoutingOspfPathParams
}

type GetNetworkSwitchRoutingOspfResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetNetworkSwitchRoutingOspf200ApplicationJSONObject map[string]interface{}
}
