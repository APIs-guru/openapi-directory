package operations

type PostServersIDActionsShutdownPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostServersIDActionsShutdownActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostServersIDActionsShutdownActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsShutdownActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsShutdownActionResponseActionStatusEnum string

const (
	PostServersIDActionsShutdownActionResponseActionStatusEnumSuccess PostServersIDActionsShutdownActionResponseActionStatusEnum = "success"
	PostServersIDActionsShutdownActionResponseActionStatusEnumRunning PostServersIDActionsShutdownActionResponseActionStatusEnum = "running"
	PostServersIDActionsShutdownActionResponseActionStatusEnumError   PostServersIDActionsShutdownActionResponseActionStatusEnum = "error"
)

type PostServersIDActionsShutdownActionResponseAction struct {
	Command   string                                                      `json:"command"`
	Error     PostServersIDActionsShutdownActionResponseActionError       `json:"error"`
	Finished  string                                                      `json:"finished"`
	ID        int64                                                       `json:"id"`
	Progress  float64                                                     `json:"progress"`
	Resources []PostServersIDActionsShutdownActionResponseActionResources `json:"resources"`
	Started   string                                                      `json:"started"`
	Status    PostServersIDActionsShutdownActionResponseActionStatusEnum  `json:"status"`
}

type PostServersIDActionsShutdownActionResponse struct {
	Action PostServersIDActionsShutdownActionResponseAction `json:"action"`
}

type PostServersIDActionsShutdownRequest struct {
	PathParams PostServersIDActionsShutdownPathParams
}

type PostServersIDActionsShutdownResponse struct {
	ActionResponse *PostServersIDActionsShutdownActionResponse
	ContentType    string
	StatusCode     int64
}
