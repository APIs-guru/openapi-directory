package operations

type PostLoadBalancersIDActionsAddTargetPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostLoadBalancersIDActionsAddTargetAddTargetRequestIP
// IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
type PostLoadBalancersIDActionsAddTargetAddTargetRequestIP struct {
	IP string `json:"ip"`
}

// PostLoadBalancersIDActionsAddTargetAddTargetRequestLabelSelector
// Configuration for label selector targets, required if type is `label_selector`
type PostLoadBalancersIDActionsAddTargetAddTargetRequestLabelSelector struct {
	Selector string `json:"selector"`
}

// PostLoadBalancersIDActionsAddTargetAddTargetRequestServer
// Configuration for type Server, required if type is `server`
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

// PostLoadBalancersIDActionsAddTargetActionResponseActionError
// Error message for the Action if error occurred, otherwise null
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

type PostLoadBalancersIDActionsAddTargetRequest struct {
	PathParams PostLoadBalancersIDActionsAddTargetPathParams
	Request    *PostLoadBalancersIDActionsAddTargetAddTargetRequest `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsAddTargetResponse struct {
	ActionResponse *PostLoadBalancersIDActionsAddTargetActionResponse
	ContentType    string
	StatusCode     int64
}
