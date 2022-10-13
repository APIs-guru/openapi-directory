package operations

type PostFloatingIpsIDActionsAssignPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostFloatingIpsIDActionsAssignRequestBodyAssignFloatingIPRequest struct {
	Server int64 `json:"server"`
}

type PostFloatingIpsIDActionsAssignRequest struct {
	PathParams PostFloatingIpsIDActionsAssignPathParams
	Request    *PostFloatingIpsIDActionsAssignRequestBodyAssignFloatingIPRequest `request:"mediaType=application/json"`
}

type PostFloatingIpsIDActionsAssign201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFloatingIpsIDActionsAssign201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFloatingIpsIDActionsAssign201ApplicationJSONActionStatusEnum string

const (
	PostFloatingIpsIDActionsAssign201ApplicationJSONActionStatusEnumSuccess PostFloatingIpsIDActionsAssign201ApplicationJSONActionStatusEnum = "success"
	PostFloatingIpsIDActionsAssign201ApplicationJSONActionStatusEnumRunning PostFloatingIpsIDActionsAssign201ApplicationJSONActionStatusEnum = "running"
	PostFloatingIpsIDActionsAssign201ApplicationJSONActionStatusEnumError   PostFloatingIpsIDActionsAssign201ApplicationJSONActionStatusEnum = "error"
)

type PostFloatingIpsIDActionsAssign201ApplicationJSONActionAction struct {
	Command   string                                                            `json:"command"`
	Error     PostFloatingIpsIDActionsAssign201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                            `json:"finished"`
	ID        int64                                                             `json:"id"`
	Progress  float64                                                           `json:"progress"`
	Resources []PostFloatingIpsIDActionsAssign201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                            `json:"started"`
	Status    PostFloatingIpsIDActionsAssign201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostFloatingIpsIDActionsAssign201ApplicationJSONActionResponse struct {
	Action PostFloatingIpsIDActionsAssign201ApplicationJSONActionAction `json:"action"`
}

type PostFloatingIpsIDActionsAssignResponse struct {
	ActionResponse *PostFloatingIpsIDActionsAssign201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
