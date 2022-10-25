package operations

type PostLoadBalancersIDActionsAttachToNetworkPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsAttachToNetworkRequestBody struct {
	IP      *string `json:"ip,omitempty"`
	Network float64 `json:"network"`
}

type PostLoadBalancersIDActionsAttachToNetworkRequest struct {
	PathParams PostLoadBalancersIDActionsAttachToNetworkPathParams
	Request    *PostLoadBalancersIDActionsAttachToNetworkRequestBody `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsAttachToNetworkActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsAttachToNetworkActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsAttachToNetworkActionResponseActionStatusEnum string

const (
	PostLoadBalancersIDActionsAttachToNetworkActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsAttachToNetworkActionResponseActionStatusEnum = "success"
	PostLoadBalancersIDActionsAttachToNetworkActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsAttachToNetworkActionResponseActionStatusEnum = "running"
	PostLoadBalancersIDActionsAttachToNetworkActionResponseActionStatusEnumError   PostLoadBalancersIDActionsAttachToNetworkActionResponseActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsAttachToNetworkActionResponseAction struct {
	Command   string                                                                   `json:"command"`
	Error     PostLoadBalancersIDActionsAttachToNetworkActionResponseActionError       `json:"error"`
	Finished  string                                                                   `json:"finished"`
	ID        int64                                                                    `json:"id"`
	Progress  float64                                                                  `json:"progress"`
	Resources []PostLoadBalancersIDActionsAttachToNetworkActionResponseActionResources `json:"resources"`
	Started   string                                                                   `json:"started"`
	Status    PostLoadBalancersIDActionsAttachToNetworkActionResponseActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsAttachToNetworkActionResponse struct {
	Action PostLoadBalancersIDActionsAttachToNetworkActionResponseAction `json:"action"`
}

type PostLoadBalancersIDActionsAttachToNetworkResponse struct {
	ActionResponse *PostLoadBalancersIDActionsAttachToNetworkActionResponse
	ContentType    string
	StatusCode     int64
}
