package operations

type PostLoadBalancersIDActionsDisablePublicInterfacePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsDisablePublicInterfaceRequest struct {
	PathParams PostLoadBalancersIDActionsDisablePublicInterfacePathParams
}

type PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionStatusEnum string

const (
	PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionStatusEnum = "success"
	PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionStatusEnum = "running"
	PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionStatusEnumError   PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseAction struct {
	Command   string                                                                          `json:"command"`
	Error     PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionError       `json:"error"`
	Finished  string                                                                          `json:"finished"`
	ID        int64                                                                           `json:"id"`
	Progress  float64                                                                         `json:"progress"`
	Resources []PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionResources `json:"resources"`
	Started   string                                                                          `json:"started"`
	Status    PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsDisablePublicInterfaceActionResponse struct {
	Action PostLoadBalancersIDActionsDisablePublicInterfaceActionResponseAction `json:"action"`
}

type PostLoadBalancersIDActionsDisablePublicInterfaceResponse struct {
	ActionResponse *PostLoadBalancersIDActionsDisablePublicInterfaceActionResponse
	ContentType    string
	StatusCode     int64
}
