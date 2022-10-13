package operations

type PostLoadBalancersIDActionsDisablePublicInterfacePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsDisablePublicInterfaceRequest struct {
	PathParams PostLoadBalancersIDActionsDisablePublicInterfacePathParams
}

type PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionAction struct {
	Command   string                                                                              `json:"command"`
	Error     PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                              `json:"finished"`
	ID        int64                                                                               `json:"id"`
	Progress  float64                                                                             `json:"progress"`
	Resources []PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                              `json:"started"`
	Status    PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsDisablePublicInterfaceResponse struct {
	ActionResponse *PostLoadBalancersIDActionsDisablePublicInterface201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
