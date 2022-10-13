package operations

type DeleteNetworkSwitchPortSchedulePathParams struct {
	NetworkID      string `pathParam:"style=simple,explode=false,name=networkId"`
	PortScheduleID string `pathParam:"style=simple,explode=false,name=portScheduleId"`
}

type DeleteNetworkSwitchPortScheduleRequest struct {
	PathParams DeleteNetworkSwitchPortSchedulePathParams
}

type DeleteNetworkSwitchPortScheduleResponse struct {
	ContentType string
	StatusCode  int64
}
