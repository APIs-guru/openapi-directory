package operations

type PostServersIDActionsDisableRescuePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsDisableRescueRequest struct {
	PathParams PostServersIDActionsDisableRescuePathParams
}

type PostServersIDActionsDisableRescue201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsDisableRescue201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsDisableRescue201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsDisableRescue201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsDisableRescue201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsDisableRescue201ApplicationJSONActionStatusEnumRunning PostServersIDActionsDisableRescue201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsDisableRescue201ApplicationJSONActionStatusEnumError   PostServersIDActionsDisableRescue201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsDisableRescue201ApplicationJSONActionAction struct {
	Command   string                                                               `json:"command"`
	Error     PostServersIDActionsDisableRescue201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                               `json:"finished"`
	ID        int64                                                                `json:"id"`
	Progress  float64                                                              `json:"progress"`
	Resources []PostServersIDActionsDisableRescue201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                               `json:"started"`
	Status    PostServersIDActionsDisableRescue201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsDisableRescue201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsDisableRescue201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsDisableRescueResponse struct {
	ActionResponse *PostServersIDActionsDisableRescue201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
