package operations

type GetNetworkSwitchStackRoutingInterfacesPathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type GetNetworkSwitchStackRoutingInterfacesRequest struct {
	PathParams GetNetworkSwitchStackRoutingInterfacesPathParams
}

type GetNetworkSwitchStackRoutingInterfacesResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	GetNetworkSwitchStackRoutingInterfaces200ApplicationJSONObject map[string]interface{}
}
