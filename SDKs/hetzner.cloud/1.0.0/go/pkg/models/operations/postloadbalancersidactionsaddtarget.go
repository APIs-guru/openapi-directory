package operations

type PostLoadBalancersIDActionsAddTargetPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsAddTargetAddTargetRequestIP struct {
	IP string `json:"ip"`
}

type PostLoadBalancersIDActionsAddTargetAddTargetRequestLabelSelector struct {
	Selector string `json:"selector"`
}

type PostLoadBalancersIDActionsAddTargetAddTargetRequestServer struct {
	ID float64 `json:"id"`
}

type PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnum string

const (
	PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnumServer        PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnum = "server"
	PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnumLabelSelector PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnum = "label_selector"
	PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnumIP            PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnum = "ip"
)

type PostLoadBalancersIDActionsAddTargetAddTargetRequest struct {
	IP            *PostLoadBalancersIDActionsAddTargetAddTargetRequestIP            `json:"ip,omitempty"`
	LabelSelector *PostLoadBalancersIDActionsAddTargetAddTargetRequestLabelSelector `json:"label_selector,omitempty"`
	Server        *PostLoadBalancersIDActionsAddTargetAddTargetRequestServer        `json:"server,omitempty"`
	Type          PostLoadBalancersIDActionsAddTargetAddTargetRequestTypeEnum       `json:"type"`
	UsePrivateIP  *bool                                                             `json:"use_private_ip,omitempty"`
}

type PostLoadBalancersIDActionsAddTargetRequest struct {
	PathParams PostLoadBalancersIDActionsAddTargetPathParams
	Request    *PostLoadBalancersIDActionsAddTargetAddTargetRequest `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsAddTargetActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsAddTargetActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnum string

const (
	PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnum = "success"
	PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnum = "running"
	PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnumError   PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsAddTargetActionResponseAction struct {
	Command   string                                                             `json:"command"`
	Error     PostLoadBalancersIDActionsAddTargetActionResponseActionError       `json:"error"`
	Finished  string                                                             `json:"finished"`
	ID        int64                                                              `json:"id"`
	Progress  float64                                                            `json:"progress"`
	Resources []PostLoadBalancersIDActionsAddTargetActionResponseActionResources `json:"resources"`
	Started   string                                                             `json:"started"`
	Status    PostLoadBalancersIDActionsAddTargetActionResponseActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsAddTargetActionResponse struct {
	Action PostLoadBalancersIDActionsAddTargetActionResponseAction `json:"action"`
}

type PostLoadBalancersIDActionsAddTargetResponse struct {
	ActionResponse *PostLoadBalancersIDActionsAddTargetActionResponse
	ContentType    string
	StatusCode     int64
}
