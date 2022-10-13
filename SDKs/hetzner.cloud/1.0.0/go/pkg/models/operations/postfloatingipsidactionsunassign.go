package operations

type PostFloatingIpsIDActionsUnassignPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostFloatingIpsIDActionsUnassignRequest struct {
	PathParams PostFloatingIpsIDActionsUnassignPathParams
}

type PostFloatingIpsIDActionsUnassign201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFloatingIpsIDActionsUnassign201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFloatingIpsIDActionsUnassign201ApplicationJSONActionStatusEnum string

const (
	PostFloatingIpsIDActionsUnassign201ApplicationJSONActionStatusEnumSuccess PostFloatingIpsIDActionsUnassign201ApplicationJSONActionStatusEnum = "success"
	PostFloatingIpsIDActionsUnassign201ApplicationJSONActionStatusEnumRunning PostFloatingIpsIDActionsUnassign201ApplicationJSONActionStatusEnum = "running"
	PostFloatingIpsIDActionsUnassign201ApplicationJSONActionStatusEnumError   PostFloatingIpsIDActionsUnassign201ApplicationJSONActionStatusEnum = "error"
)

type PostFloatingIpsIDActionsUnassign201ApplicationJSONActionAction struct {
	Command   string                                                              `json:"command"`
	Error     PostFloatingIpsIDActionsUnassign201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                              `json:"finished"`
	ID        int64                                                               `json:"id"`
	Progress  float64                                                             `json:"progress"`
	Resources []PostFloatingIpsIDActionsUnassign201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                              `json:"started"`
	Status    PostFloatingIpsIDActionsUnassign201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostFloatingIpsIDActionsUnassign201ApplicationJSONActionResponse struct {
	Action PostFloatingIpsIDActionsUnassign201ApplicationJSONActionAction `json:"action"`
}

type PostFloatingIpsIDActionsUnassignResponse struct {
	ActionResponse *PostFloatingIpsIDActionsUnassign201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
