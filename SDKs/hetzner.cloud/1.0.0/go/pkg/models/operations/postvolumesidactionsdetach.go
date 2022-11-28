package operations

type PostVolumesIDActionsDetachPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostVolumesIDActionsDetachActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostVolumesIDActionsDetachActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostVolumesIDActionsDetachActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostVolumesIDActionsDetachActionResponseActionStatusEnum string

const (
	PostVolumesIDActionsDetachActionResponseActionStatusEnumSuccess PostVolumesIDActionsDetachActionResponseActionStatusEnum = "success"
	PostVolumesIDActionsDetachActionResponseActionStatusEnumRunning PostVolumesIDActionsDetachActionResponseActionStatusEnum = "running"
	PostVolumesIDActionsDetachActionResponseActionStatusEnumError   PostVolumesIDActionsDetachActionResponseActionStatusEnum = "error"
)

type PostVolumesIDActionsDetachActionResponseAction struct {
	Command   string                                                    `json:"command"`
	Error     PostVolumesIDActionsDetachActionResponseActionError       `json:"error"`
	Finished  string                                                    `json:"finished"`
	ID        int64                                                     `json:"id"`
	Progress  float64                                                   `json:"progress"`
	Resources []PostVolumesIDActionsDetachActionResponseActionResources `json:"resources"`
	Started   string                                                    `json:"started"`
	Status    PostVolumesIDActionsDetachActionResponseActionStatusEnum  `json:"status"`
}

type PostVolumesIDActionsDetachActionResponse struct {
	Action PostVolumesIDActionsDetachActionResponseAction `json:"action"`
}

type PostVolumesIDActionsDetachRequest struct {
	PathParams PostVolumesIDActionsDetachPathParams
}

type PostVolumesIDActionsDetachResponse struct {
	ActionResponse *PostVolumesIDActionsDetachActionResponse
	ContentType    string
	StatusCode     int64
}
