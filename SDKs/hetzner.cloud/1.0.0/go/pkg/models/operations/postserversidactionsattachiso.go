package operations

type PostServersIDActionsAttachIsoPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsAttachIsoRequestBody struct {
	Iso string `json:"iso"`
}

type PostServersIDActionsAttachIsoRequest struct {
	PathParams PostServersIDActionsAttachIsoPathParams
	Request    *PostServersIDActionsAttachIsoRequestBody `request:"mediaType=application/json"`
}

type PostServersIDActionsAttachIso201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsAttachIso201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsAttachIso201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsAttachIso201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsAttachIso201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsAttachIso201ApplicationJSONActionStatusEnumRunning PostServersIDActionsAttachIso201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsAttachIso201ApplicationJSONActionStatusEnumError   PostServersIDActionsAttachIso201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsAttachIso201ApplicationJSONActionAction struct {
	Command   string                                                           `json:"command"`
	Error     PostServersIDActionsAttachIso201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                           `json:"finished"`
	ID        int64                                                            `json:"id"`
	Progress  float64                                                          `json:"progress"`
	Resources []PostServersIDActionsAttachIso201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                           `json:"started"`
	Status    PostServersIDActionsAttachIso201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsAttachIso201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsAttachIso201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsAttachIsoResponse struct {
	ActionResponse *PostServersIDActionsAttachIso201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
