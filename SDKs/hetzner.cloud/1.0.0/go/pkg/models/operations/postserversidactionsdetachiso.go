package operations

type PostServersIDActionsDetachIsoPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsDetachIsoRequest struct {
	PathParams PostServersIDActionsDetachIsoPathParams
}

type PostServersIDActionsDetachIsoActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsDetachIsoActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsDetachIsoActionResponseActionStatusEnum string

const (
	PostServersIDActionsDetachIsoActionResponseActionStatusEnumSuccess PostServersIDActionsDetachIsoActionResponseActionStatusEnum = "success"
	PostServersIDActionsDetachIsoActionResponseActionStatusEnumRunning PostServersIDActionsDetachIsoActionResponseActionStatusEnum = "running"
	PostServersIDActionsDetachIsoActionResponseActionStatusEnumError   PostServersIDActionsDetachIsoActionResponseActionStatusEnum = "error"
)

type PostServersIDActionsDetachIsoActionResponseAction struct {
	Command   string                                                       `json:"command"`
	Error     PostServersIDActionsDetachIsoActionResponseActionError       `json:"error"`
	Finished  string                                                       `json:"finished"`
	ID        int64                                                        `json:"id"`
	Progress  float64                                                      `json:"progress"`
	Resources []PostServersIDActionsDetachIsoActionResponseActionResources `json:"resources"`
	Started   string                                                       `json:"started"`
	Status    PostServersIDActionsDetachIsoActionResponseActionStatusEnum  `json:"status"`
}

type PostServersIDActionsDetachIsoActionResponse struct {
	Action PostServersIDActionsDetachIsoActionResponseAction `json:"action"`
}

type PostServersIDActionsDetachIsoResponse struct {
	ActionResponse *PostServersIDActionsDetachIsoActionResponse
	ContentType    string
	StatusCode     int64
}
