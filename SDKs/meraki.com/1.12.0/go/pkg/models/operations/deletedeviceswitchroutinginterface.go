package operations

type DeleteDeviceSwitchRoutingInterfacePathParams struct {
	InterfaceID string `pathParam:"style=simple,explode=false,name=interfaceId"`
	Serial      string `pathParam:"style=simple,explode=false,name=serial"`
}

type DeleteDeviceSwitchRoutingInterfaceRequest struct {
	PathParams DeleteDeviceSwitchRoutingInterfacePathParams
}

type DeleteDeviceSwitchRoutingInterfaceResponse struct {
	ContentType string
	StatusCode  int64
}
