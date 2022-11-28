package operations

type GetVolumesIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

// GetVolumesIDActionsActionIDActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type GetVolumesIDActionsActionIDActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetVolumesIDActionsActionIDActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetVolumesIDActionsActionIDActionResponseActionStatusEnum string

const (
	GetVolumesIDActionsActionIDActionResponseActionStatusEnumSuccess GetVolumesIDActionsActionIDActionResponseActionStatusEnum = "success"
	GetVolumesIDActionsActionIDActionResponseActionStatusEnumRunning GetVolumesIDActionsActionIDActionResponseActionStatusEnum = "running"
	GetVolumesIDActionsActionIDActionResponseActionStatusEnumError   GetVolumesIDActionsActionIDActionResponseActionStatusEnum = "error"
)

type GetVolumesIDActionsActionIDActionResponseAction struct {
	Command   string                                                     `json:"command"`
	Error     GetVolumesIDActionsActionIDActionResponseActionError       `json:"error"`
	Finished  string                                                     `json:"finished"`
	ID        int64                                                      `json:"id"`
	Progress  float64                                                    `json:"progress"`
	Resources []GetVolumesIDActionsActionIDActionResponseActionResources `json:"resources"`
	Started   string                                                     `json:"started"`
	Status    GetVolumesIDActionsActionIDActionResponseActionStatusEnum  `json:"status"`
}

type GetVolumesIDActionsActionIDActionResponse struct {
	Action GetVolumesIDActionsActionIDActionResponseAction `json:"action"`
}

type GetVolumesIDActionsActionIDRequest struct {
	PathParams GetVolumesIDActionsActionIDPathParams
}

type GetVolumesIDActionsActionIDResponse struct {
	ActionResponse *GetVolumesIDActionsActionIDActionResponse
	ContentType    string
	StatusCode     int64
}
