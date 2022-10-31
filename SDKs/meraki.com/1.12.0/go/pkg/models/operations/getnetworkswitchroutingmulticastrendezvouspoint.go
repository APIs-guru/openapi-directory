package operations

type GetNetworkSwitchRoutingMulticastRendezvousPointPathParams struct {
	NetworkID         string `pathParam:"style=simple,explode=false,name=networkId"`
	RendezvousPointID string `pathParam:"style=simple,explode=false,name=rendezvousPointId"`
}

type GetNetworkSwitchRoutingMulticastRendezvousPointRequest struct {
	PathParams GetNetworkSwitchRoutingMulticastRendezvousPointPathParams
}

type GetNetworkSwitchRoutingMulticastRendezvousPointResponse struct {
	ContentType                                                             string
	StatusCode                                                              int64
	GetNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject map[string]interface{}
}
