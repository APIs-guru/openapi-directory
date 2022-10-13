package operations

type CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody struct {
	InterfaceIP    string `json:"interfaceIp"`
	MulticastGroup string `json:"multicastGroup"`
}

type CreateNetworkSwitchRoutingMulticastRendezvousPointRequest struct {
	PathParams CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams
	Request    CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkSwitchRoutingMulticastRendezvousPointResponse struct {
	ContentType                                                                string
	StatusCode                                                                 int64
	CreateNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject map[string]interface{}
}
