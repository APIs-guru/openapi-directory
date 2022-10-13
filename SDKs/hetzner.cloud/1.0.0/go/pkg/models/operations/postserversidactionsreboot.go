package operations

type PostServersIDActionsRebootPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsRebootRequest struct {
	PathParams PostServersIDActionsRebootPathParams
}

type PostServersIDActionsReboot201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsReboot201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsReboot201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsReboot201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsReboot201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsReboot201ApplicationJSONActionStatusEnumRunning PostServersIDActionsReboot201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsReboot201ApplicationJSONActionStatusEnumError   PostServersIDActionsReboot201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsReboot201ApplicationJSONActionAction struct {
	Command   string                                                        `json:"command"`
	Error     PostServersIDActionsReboot201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                        `json:"finished"`
	ID        int64                                                         `json:"id"`
	Progress  float64                                                       `json:"progress"`
	Resources []PostServersIDActionsReboot201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                        `json:"started"`
	Status    PostServersIDActionsReboot201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsReboot201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsReboot201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsRebootResponse struct {
	ActionResponse *PostServersIDActionsReboot201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
