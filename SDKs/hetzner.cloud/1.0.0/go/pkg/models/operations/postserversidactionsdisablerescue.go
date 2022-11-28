package operations

type PostServersIDActionsDisableRescuePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostServersIDActionsDisableRescueActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostServersIDActionsDisableRescueActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsDisableRescueActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsDisableRescueActionResponseActionStatusEnum string

const (
	PostServersIDActionsDisableRescueActionResponseActionStatusEnumSuccess PostServersIDActionsDisableRescueActionResponseActionStatusEnum = "success"
	PostServersIDActionsDisableRescueActionResponseActionStatusEnumRunning PostServersIDActionsDisableRescueActionResponseActionStatusEnum = "running"
	PostServersIDActionsDisableRescueActionResponseActionStatusEnumError   PostServersIDActionsDisableRescueActionResponseActionStatusEnum = "error"
)

type PostServersIDActionsDisableRescueActionResponseAction struct {
	Command   string                                                           `json:"command"`
	Error     PostServersIDActionsDisableRescueActionResponseActionError       `json:"error"`
	Finished  string                                                           `json:"finished"`
	ID        int64                                                            `json:"id"`
	Progress  float64                                                          `json:"progress"`
	Resources []PostServersIDActionsDisableRescueActionResponseActionResources `json:"resources"`
	Started   string                                                           `json:"started"`
	Status    PostServersIDActionsDisableRescueActionResponseActionStatusEnum  `json:"status"`
}

type PostServersIDActionsDisableRescueActionResponse struct {
	Action PostServersIDActionsDisableRescueActionResponseAction `json:"action"`
}

type PostServersIDActionsDisableRescueRequest struct {
	PathParams PostServersIDActionsDisableRescuePathParams
}

type PostServersIDActionsDisableRescueResponse struct {
	ActionResponse *PostServersIDActionsDisableRescueActionResponse
	ContentType    string
	StatusCode     int64
}
