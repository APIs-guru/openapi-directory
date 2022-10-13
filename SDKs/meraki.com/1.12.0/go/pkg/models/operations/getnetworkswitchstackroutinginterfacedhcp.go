package operations

type GetNetworkSwitchStackRoutingInterfaceDhcpPathParams struct {
	InterfaceID   string `pathParam:"style=simple,explode=false,name=interfaceId"`
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type GetNetworkSwitchStackRoutingInterfaceDhcpRequest struct {
	PathParams GetNetworkSwitchStackRoutingInterfaceDhcpPathParams
}

type GetNetworkSwitchStackRoutingInterfaceDhcpResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	GetNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject map[string]interface{}
}
