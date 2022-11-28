package operations

type PostServersIDActionsRebootPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostServersIDActionsRebootActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostServersIDActionsRebootActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsRebootActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsRebootActionResponseActionStatusEnum string

const (
	PostServersIDActionsRebootActionResponseActionStatusEnumSuccess PostServersIDActionsRebootActionResponseActionStatusEnum = "success"
	PostServersIDActionsRebootActionResponseActionStatusEnumRunning PostServersIDActionsRebootActionResponseActionStatusEnum = "running"
	PostServersIDActionsRebootActionResponseActionStatusEnumError   PostServersIDActionsRebootActionResponseActionStatusEnum = "error"
)

type PostServersIDActionsRebootActionResponseAction struct {
	Command   string                                                    `json:"command"`
	Error     PostServersIDActionsRebootActionResponseActionError       `json:"error"`
	Finished  string                                                    `json:"finished"`
	ID        int64                                                     `json:"id"`
	Progress  float64                                                   `json:"progress"`
	Resources []PostServersIDActionsRebootActionResponseActionResources `json:"resources"`
	Started   string                                                    `json:"started"`
	Status    PostServersIDActionsRebootActionResponseActionStatusEnum  `json:"status"`
}

type PostServersIDActionsRebootActionResponse struct {
	Action PostServersIDActionsRebootActionResponseAction `json:"action"`
}

type PostServersIDActionsRebootRequest struct {
	PathParams PostServersIDActionsRebootPathParams
}

type PostServersIDActionsRebootResponse struct {
	ActionResponse *PostServersIDActionsRebootActionResponse
	ContentType    string
	StatusCode     int64
}
