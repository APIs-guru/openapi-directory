package operations

type PostServersIDActionsShutdownPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsShutdownRequest struct {
	PathParams PostServersIDActionsShutdownPathParams
}

type PostServersIDActionsShutdown201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsShutdown201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsShutdown201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsShutdown201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsShutdown201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsShutdown201ApplicationJSONActionStatusEnumRunning PostServersIDActionsShutdown201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsShutdown201ApplicationJSONActionStatusEnumError   PostServersIDActionsShutdown201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsShutdown201ApplicationJSONActionAction struct {
	Command   string                                                          `json:"command"`
	Error     PostServersIDActionsShutdown201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                          `json:"finished"`
	ID        int64                                                           `json:"id"`
	Progress  float64                                                         `json:"progress"`
	Resources []PostServersIDActionsShutdown201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                          `json:"started"`
	Status    PostServersIDActionsShutdown201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsShutdown201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsShutdown201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsShutdownResponse struct {
	ActionResponse *PostServersIDActionsShutdown201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
