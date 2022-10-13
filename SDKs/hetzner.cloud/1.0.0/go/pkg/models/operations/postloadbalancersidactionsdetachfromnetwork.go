package operations

type PostLoadBalancersIDActionsDetachFromNetworkPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsDetachFromNetworkRequestBody struct {
	Network float64 `json:"network"`
}

type PostLoadBalancersIDActionsDetachFromNetworkRequest struct {
	PathParams PostLoadBalancersIDActionsDetachFromNetworkPathParams
	Request    *PostLoadBalancersIDActionsDetachFromNetworkRequestBody `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionAction struct {
	Command   string                                                                         `json:"command"`
	Error     PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                         `json:"finished"`
	ID        int64                                                                          `json:"id"`
	Progress  float64                                                                        `json:"progress"`
	Resources []PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                         `json:"started"`
	Status    PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsDetachFromNetworkResponse struct {
	ActionResponse *PostLoadBalancersIDActionsDetachFromNetwork201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
