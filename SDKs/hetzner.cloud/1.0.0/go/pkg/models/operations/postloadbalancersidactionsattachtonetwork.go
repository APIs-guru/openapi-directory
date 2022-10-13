package operations

type PostLoadBalancersIDActionsAttachToNetworkPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsAttachToNetworkRequestBody struct {
	IP      *string `json:"ip"`
	Network float64 `json:"network"`
}

type PostLoadBalancersIDActionsAttachToNetworkRequest struct {
	PathParams PostLoadBalancersIDActionsAttachToNetworkPathParams
	Request    *PostLoadBalancersIDActionsAttachToNetworkRequestBody `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionAction struct {
	Command   string                                                                       `json:"command"`
	Error     PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                       `json:"finished"`
	ID        int64                                                                        `json:"id"`
	Progress  float64                                                                      `json:"progress"`
	Resources []PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                       `json:"started"`
	Status    PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsAttachToNetworkResponse struct {
	ActionResponse *PostLoadBalancersIDActionsAttachToNetwork201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
