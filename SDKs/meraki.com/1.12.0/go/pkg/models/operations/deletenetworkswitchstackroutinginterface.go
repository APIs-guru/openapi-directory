package operations

type DeleteNetworkSwitchStackRoutingInterfacePathParams struct {
	InterfaceID   string `pathParam:"style=simple,explode=false,name=interfaceId"`
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type DeleteNetworkSwitchStackRoutingInterfaceRequest struct {
	PathParams DeleteNetworkSwitchStackRoutingInterfacePathParams
}

type DeleteNetworkSwitchStackRoutingInterfaceResponse struct {
	ContentType string
	StatusCode  int64
}
