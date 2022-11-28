package operations

type PostFloatingIpsIDActionsUnassignPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostFloatingIpsIDActionsUnassignActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostFloatingIpsIDActionsUnassignActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFloatingIpsIDActionsUnassignActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFloatingIpsIDActionsUnassignActionResponseActionStatusEnum string

const (
	PostFloatingIpsIDActionsUnassignActionResponseActionStatusEnumSuccess PostFloatingIpsIDActionsUnassignActionResponseActionStatusEnum = "success"
	PostFloatingIpsIDActionsUnassignActionResponseActionStatusEnumRunning PostFloatingIpsIDActionsUnassignActionResponseActionStatusEnum = "running"
	PostFloatingIpsIDActionsUnassignActionResponseActionStatusEnumError   PostFloatingIpsIDActionsUnassignActionResponseActionStatusEnum = "error"
)

type PostFloatingIpsIDActionsUnassignActionResponseAction struct {
	Command   string                                                          `json:"command"`
	Error     PostFloatingIpsIDActionsUnassignActionResponseActionError       `json:"error"`
	Finished  string                                                          `json:"finished"`
	ID        int64                                                           `json:"id"`
	Progress  float64                                                         `json:"progress"`
	Resources []PostFloatingIpsIDActionsUnassignActionResponseActionResources `json:"resources"`
	Started   string                                                          `json:"started"`
	Status    PostFloatingIpsIDActionsUnassignActionResponseActionStatusEnum  `json:"status"`
}

type PostFloatingIpsIDActionsUnassignActionResponse struct {
	Action PostFloatingIpsIDActionsUnassignActionResponseAction `json:"action"`
}

type PostFloatingIpsIDActionsUnassignRequest struct {
	PathParams PostFloatingIpsIDActionsUnassignPathParams
}

type PostFloatingIpsIDActionsUnassignResponse struct {
	ActionResponse *PostFloatingIpsIDActionsUnassignActionResponse
	ContentType    string
	StatusCode     int64
}
