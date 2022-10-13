package operations

type PostFloatingIpsIDActionsChangeProtectionPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostFloatingIpsIDActionsChangeProtectionRequestBodyChangeProtectionRequest struct {
	Delete *bool `json:"delete"`
}

type PostFloatingIpsIDActionsChangeProtectionRequest struct {
	PathParams PostFloatingIpsIDActionsChangeProtectionPathParams
	Request    *PostFloatingIpsIDActionsChangeProtectionRequestBodyChangeProtectionRequest `request:"mediaType=application/json"`
}

type PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionStatusEnum string

const (
	PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionStatusEnumSuccess PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "success"
	PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionStatusEnumRunning PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "running"
	PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionStatusEnumError   PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "error"
)

type PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionAction struct {
	Command   string                                                                      `json:"command"`
	Error     PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                      `json:"finished"`
	ID        int64                                                                       `json:"id"`
	Progress  float64                                                                     `json:"progress"`
	Resources []PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                      `json:"started"`
	Status    PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionResponse struct {
	Action PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionAction `json:"action"`
}

type PostFloatingIpsIDActionsChangeProtectionResponse struct {
	ActionResponse *PostFloatingIpsIDActionsChangeProtection201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
