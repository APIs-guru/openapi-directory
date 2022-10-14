package operations

type PostLoadBalancersIDActionsChangeProtectionPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsChangeProtectionRequestBody struct {
	Delete *bool `json:"delete,omitempty"`
}

type PostLoadBalancersIDActionsChangeProtectionRequest struct {
	PathParams PostLoadBalancersIDActionsChangeProtectionPathParams
	Request    *PostLoadBalancersIDActionsChangeProtectionRequestBody `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionAction struct {
	Command   string                                                                        `json:"command"`
	Error     PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                        `json:"finished"`
	ID        int64                                                                         `json:"id"`
	Progress  float64                                                                       `json:"progress"`
	Resources []PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                        `json:"started"`
	Status    PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsChangeProtectionResponse struct {
	ActionResponse *PostLoadBalancersIDActionsChangeProtection201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
