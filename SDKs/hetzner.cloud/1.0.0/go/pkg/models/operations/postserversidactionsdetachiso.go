package operations

type PostServersIDActionsDetachIsoPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsDetachIsoRequest struct {
	PathParams PostServersIDActionsDetachIsoPathParams
}

type PostServersIDActionsDetachIso201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsDetachIso201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsDetachIso201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsDetachIso201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsDetachIso201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsDetachIso201ApplicationJSONActionStatusEnumRunning PostServersIDActionsDetachIso201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsDetachIso201ApplicationJSONActionStatusEnumError   PostServersIDActionsDetachIso201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsDetachIso201ApplicationJSONActionAction struct {
	Command   string                                                           `json:"command"`
	Error     PostServersIDActionsDetachIso201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                           `json:"finished"`
	ID        int64                                                            `json:"id"`
	Progress  float64                                                          `json:"progress"`
	Resources []PostServersIDActionsDetachIso201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                           `json:"started"`
	Status    PostServersIDActionsDetachIso201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsDetachIso201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsDetachIso201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsDetachIsoResponse struct {
	ActionResponse *PostServersIDActionsDetachIso201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
