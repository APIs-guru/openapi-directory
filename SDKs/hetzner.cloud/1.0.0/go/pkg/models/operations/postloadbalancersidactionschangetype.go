package operations

type PostLoadBalancersIDActionsChangeTypePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsChangeTypeRequestBodyChangeTypeRequest struct {
	LoadBalancerType string `json:"load_balancer_type"`
}

type PostLoadBalancersIDActionsChangeTypeRequest struct {
	PathParams PostLoadBalancersIDActionsChangeTypePathParams
	Request    *PostLoadBalancersIDActionsChangeTypeRequestBodyChangeTypeRequest `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsChangeType201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsChangeType201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsChangeType201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsChangeType201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsChangeType201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsChangeType201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsChangeType201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsChangeType201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsChangeType201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsChangeType201ApplicationJSONActionAction struct {
	Command   string                                                                  `json:"command"`
	Error     PostLoadBalancersIDActionsChangeType201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                  `json:"finished"`
	ID        int64                                                                   `json:"id"`
	Progress  float64                                                                 `json:"progress"`
	Resources []PostLoadBalancersIDActionsChangeType201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                  `json:"started"`
	Status    PostLoadBalancersIDActionsChangeType201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsChangeType201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsChangeType201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsChangeTypeResponse struct {
	ActionResponse *PostLoadBalancersIDActionsChangeType201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
