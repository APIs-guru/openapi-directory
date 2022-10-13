package operations

type PostLoadBalancersIDActionsEnablePublicInterfacePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsEnablePublicInterfaceRequest struct {
	PathParams PostLoadBalancersIDActionsEnablePublicInterfacePathParams
}

type PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionAction struct {
	Command   string                                                                             `json:"command"`
	Error     PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                             `json:"finished"`
	ID        int64                                                                              `json:"id"`
	Progress  float64                                                                            `json:"progress"`
	Resources []PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                             `json:"started"`
	Status    PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsEnablePublicInterfaceResponse struct {
	ActionResponse *PostLoadBalancersIDActionsEnablePublicInterface201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
