package operations

type PostLoadBalancersIDActionsDeleteServicePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsDeleteServiceRequestBody struct {
	ListenPort float64 `json:"listen_port"`
}

type PostLoadBalancersIDActionsDeleteServiceRequest struct {
	PathParams PostLoadBalancersIDActionsDeleteServicePathParams
	Request    *PostLoadBalancersIDActionsDeleteServiceRequestBody `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionAction struct {
	Command   string                                                                     `json:"command"`
	Error     PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                     `json:"finished"`
	ID        int64                                                                      `json:"id"`
	Progress  float64                                                                    `json:"progress"`
	Resources []PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                     `json:"started"`
	Status    PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsDeleteServiceResponse struct {
	ActionResponse *PostLoadBalancersIDActionsDeleteService201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
