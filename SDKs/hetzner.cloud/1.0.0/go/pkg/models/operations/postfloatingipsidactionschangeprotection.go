package operations

type PostFloatingIpsIDActionsChangeProtectionPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostFloatingIpsIDActionsChangeProtectionChangeProtectionRequest struct {
	Delete *bool `json:"delete,omitempty"`
}

// PostFloatingIpsIDActionsChangeProtectionActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostFloatingIpsIDActionsChangeProtectionActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFloatingIpsIDActionsChangeProtectionActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFloatingIpsIDActionsChangeProtectionActionResponseActionStatusEnum string

const (
	PostFloatingIpsIDActionsChangeProtectionActionResponseActionStatusEnumSuccess PostFloatingIpsIDActionsChangeProtectionActionResponseActionStatusEnum = "success"
	PostFloatingIpsIDActionsChangeProtectionActionResponseActionStatusEnumRunning PostFloatingIpsIDActionsChangeProtectionActionResponseActionStatusEnum = "running"
	PostFloatingIpsIDActionsChangeProtectionActionResponseActionStatusEnumError   PostFloatingIpsIDActionsChangeProtectionActionResponseActionStatusEnum = "error"
)

type PostFloatingIpsIDActionsChangeProtectionActionResponseAction struct {
	Command   string                                                                  `json:"command"`
	Error     PostFloatingIpsIDActionsChangeProtectionActionResponseActionError       `json:"error"`
	Finished  string                                                                  `json:"finished"`
	ID        int64                                                                   `json:"id"`
	Progress  float64                                                                 `json:"progress"`
	Resources []PostFloatingIpsIDActionsChangeProtectionActionResponseActionResources `json:"resources"`
	Started   string                                                                  `json:"started"`
	Status    PostFloatingIpsIDActionsChangeProtectionActionResponseActionStatusEnum  `json:"status"`
}

type PostFloatingIpsIDActionsChangeProtectionActionResponse struct {
	Action PostFloatingIpsIDActionsChangeProtectionActionResponseAction `json:"action"`
}

type PostFloatingIpsIDActionsChangeProtectionRequest struct {
	PathParams PostFloatingIpsIDActionsChangeProtectionPathParams
	Request    *PostFloatingIpsIDActionsChangeProtectionChangeProtectionRequest `request:"mediaType=application/json"`
}

type PostFloatingIpsIDActionsChangeProtectionResponse struct {
	ActionResponse *PostFloatingIpsIDActionsChangeProtectionActionResponse
	ContentType    string
	StatusCode     int64
}
