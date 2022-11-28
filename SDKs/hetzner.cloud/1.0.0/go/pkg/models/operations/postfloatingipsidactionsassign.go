package operations

type PostFloatingIpsIDActionsAssignPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostFloatingIpsIDActionsAssignAssignFloatingIPRequest struct {
	Server int64 `json:"server"`
}

// PostFloatingIpsIDActionsAssignActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostFloatingIpsIDActionsAssignActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFloatingIpsIDActionsAssignActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFloatingIpsIDActionsAssignActionResponseActionStatusEnum string

const (
	PostFloatingIpsIDActionsAssignActionResponseActionStatusEnumSuccess PostFloatingIpsIDActionsAssignActionResponseActionStatusEnum = "success"
	PostFloatingIpsIDActionsAssignActionResponseActionStatusEnumRunning PostFloatingIpsIDActionsAssignActionResponseActionStatusEnum = "running"
	PostFloatingIpsIDActionsAssignActionResponseActionStatusEnumError   PostFloatingIpsIDActionsAssignActionResponseActionStatusEnum = "error"
)

type PostFloatingIpsIDActionsAssignActionResponseAction struct {
	Command   string                                                        `json:"command"`
	Error     PostFloatingIpsIDActionsAssignActionResponseActionError       `json:"error"`
	Finished  string                                                        `json:"finished"`
	ID        int64                                                         `json:"id"`
	Progress  float64                                                       `json:"progress"`
	Resources []PostFloatingIpsIDActionsAssignActionResponseActionResources `json:"resources"`
	Started   string                                                        `json:"started"`
	Status    PostFloatingIpsIDActionsAssignActionResponseActionStatusEnum  `json:"status"`
}

type PostFloatingIpsIDActionsAssignActionResponse struct {
	Action PostFloatingIpsIDActionsAssignActionResponseAction `json:"action"`
}

type PostFloatingIpsIDActionsAssignRequest struct {
	PathParams PostFloatingIpsIDActionsAssignPathParams
	Request    *PostFloatingIpsIDActionsAssignAssignFloatingIPRequest `request:"mediaType=application/json"`
}

type PostFloatingIpsIDActionsAssignResponse struct {
	ActionResponse *PostFloatingIpsIDActionsAssignActionResponse
	ContentType    string
	StatusCode     int64
}
