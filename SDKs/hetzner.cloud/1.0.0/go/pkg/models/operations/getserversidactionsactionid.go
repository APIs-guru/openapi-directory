package operations

type GetServersIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

// GetServersIDActionsActionIDActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type GetServersIDActionsActionIDActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetServersIDActionsActionIDActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetServersIDActionsActionIDActionResponseActionStatusEnum string

const (
	GetServersIDActionsActionIDActionResponseActionStatusEnumSuccess GetServersIDActionsActionIDActionResponseActionStatusEnum = "success"
	GetServersIDActionsActionIDActionResponseActionStatusEnumRunning GetServersIDActionsActionIDActionResponseActionStatusEnum = "running"
	GetServersIDActionsActionIDActionResponseActionStatusEnumError   GetServersIDActionsActionIDActionResponseActionStatusEnum = "error"
)

type GetServersIDActionsActionIDActionResponseAction struct {
	Command   string                                                     `json:"command"`
	Error     GetServersIDActionsActionIDActionResponseActionError       `json:"error"`
	Finished  string                                                     `json:"finished"`
	ID        int64                                                      `json:"id"`
	Progress  float64                                                    `json:"progress"`
	Resources []GetServersIDActionsActionIDActionResponseActionResources `json:"resources"`
	Started   string                                                     `json:"started"`
	Status    GetServersIDActionsActionIDActionResponseActionStatusEnum  `json:"status"`
}

type GetServersIDActionsActionIDActionResponse struct {
	Action GetServersIDActionsActionIDActionResponseAction `json:"action"`
}

type GetServersIDActionsActionIDRequest struct {
	PathParams GetServersIDActionsActionIDPathParams
}

type GetServersIDActionsActionIDResponse struct {
	ActionResponse *GetServersIDActionsActionIDActionResponse
	ContentType    string
	StatusCode     int64
}
