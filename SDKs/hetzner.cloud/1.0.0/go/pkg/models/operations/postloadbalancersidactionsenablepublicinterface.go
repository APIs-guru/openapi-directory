package operations

type PostLoadBalancersIDActionsEnablePublicInterfacePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionStatusEnum string

const (
	PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionStatusEnum = "success"
	PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionStatusEnum = "running"
	PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionStatusEnumError   PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseAction struct {
	Command   string                                                                         `json:"command"`
	Error     PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionError       `json:"error"`
	Finished  string                                                                         `json:"finished"`
	ID        int64                                                                          `json:"id"`
	Progress  float64                                                                        `json:"progress"`
	Resources []PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionResources `json:"resources"`
	Started   string                                                                         `json:"started"`
	Status    PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsEnablePublicInterfaceActionResponse struct {
	Action PostLoadBalancersIDActionsEnablePublicInterfaceActionResponseAction `json:"action"`
}

type PostLoadBalancersIDActionsEnablePublicInterfaceRequest struct {
	PathParams PostLoadBalancersIDActionsEnablePublicInterfacePathParams
}

type PostLoadBalancersIDActionsEnablePublicInterfaceResponse struct {
	ActionResponse *PostLoadBalancersIDActionsEnablePublicInterfaceActionResponse
	ContentType    string
	StatusCode     int64
}
