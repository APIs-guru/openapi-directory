package operations

type PostServersIDActionsResetPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsResetRequest struct {
	PathParams PostServersIDActionsResetPathParams
}

type PostServersIDActionsReset201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsReset201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsReset201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsReset201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsReset201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsReset201ApplicationJSONActionStatusEnumRunning PostServersIDActionsReset201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsReset201ApplicationJSONActionStatusEnumError   PostServersIDActionsReset201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsReset201ApplicationJSONActionAction struct {
	Command   string                                                       `json:"command"`
	Error     PostServersIDActionsReset201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                       `json:"finished"`
	ID        int64                                                        `json:"id"`
	Progress  float64                                                      `json:"progress"`
	Resources []PostServersIDActionsReset201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                       `json:"started"`
	Status    PostServersIDActionsReset201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsReset201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsReset201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsResetResponse struct {
	ActionResponse *PostServersIDActionsReset201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
