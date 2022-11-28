package operations

type GetActionsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// GetActionsIDActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type GetActionsIDActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetActionsIDActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetActionsIDActionResponseActionStatusEnum string

const (
	GetActionsIDActionResponseActionStatusEnumSuccess GetActionsIDActionResponseActionStatusEnum = "success"
	GetActionsIDActionResponseActionStatusEnumRunning GetActionsIDActionResponseActionStatusEnum = "running"
	GetActionsIDActionResponseActionStatusEnumError   GetActionsIDActionResponseActionStatusEnum = "error"
)

type GetActionsIDActionResponseAction struct {
	Command   string                                      `json:"command"`
	Error     GetActionsIDActionResponseActionError       `json:"error"`
	Finished  string                                      `json:"finished"`
	ID        int64                                       `json:"id"`
	Progress  float64                                     `json:"progress"`
	Resources []GetActionsIDActionResponseActionResources `json:"resources"`
	Started   string                                      `json:"started"`
	Status    GetActionsIDActionResponseActionStatusEnum  `json:"status"`
}

type GetActionsIDActionResponse struct {
	Action GetActionsIDActionResponseAction `json:"action"`
}

type GetActionsIDRequest struct {
	PathParams GetActionsIDPathParams
}

type GetActionsIDResponse struct {
	ActionResponse *GetActionsIDActionResponse
	ContentType    string
	StatusCode     int64
}
