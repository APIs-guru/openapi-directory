package operations

type PostLoadBalancersIDActionsRemoveTargetPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsRemoveTargetRequestBodyIP struct {
	IP string `json:"ip"`
}

type PostLoadBalancersIDActionsRemoveTargetRequestBodyLabelSelector struct {
	Selector string `json:"selector"`
}

type PostLoadBalancersIDActionsRemoveTargetRequestBodyServer struct {
	ID float64 `json:"id"`
}

type PostLoadBalancersIDActionsRemoveTargetRequestBodyTypeEnum string

const (
	PostLoadBalancersIDActionsRemoveTargetRequestBodyTypeEnumServer        PostLoadBalancersIDActionsRemoveTargetRequestBodyTypeEnum = "server"
	PostLoadBalancersIDActionsRemoveTargetRequestBodyTypeEnumLabelSelector PostLoadBalancersIDActionsRemoveTargetRequestBodyTypeEnum = "label_selector"
	PostLoadBalancersIDActionsRemoveTargetRequestBodyTypeEnumIP            PostLoadBalancersIDActionsRemoveTargetRequestBodyTypeEnum = "ip"
)

type PostLoadBalancersIDActionsRemoveTargetRequestBodyRemoveTargetRequest struct {
	IP            *PostLoadBalancersIDActionsRemoveTargetRequestBodyIP            `json:"ip,omitempty"`
	LabelSelector *PostLoadBalancersIDActionsRemoveTargetRequestBodyLabelSelector `json:"label_selector,omitempty"`
	Server        *PostLoadBalancersIDActionsRemoveTargetRequestBodyServer        `json:"server,omitempty"`
	Type          PostLoadBalancersIDActionsRemoveTargetRequestBodyTypeEnum       `json:"type"`
}

type PostLoadBalancersIDActionsRemoveTargetRequest struct {
	PathParams PostLoadBalancersIDActionsRemoveTargetPathParams
	Request    *PostLoadBalancersIDActionsRemoveTargetRequestBodyRemoveTargetRequest `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionAction struct {
	Command   string                                                                    `json:"command"`
	Error     PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                    `json:"finished"`
	ID        int64                                                                     `json:"id"`
	Progress  float64                                                                   `json:"progress"`
	Resources []PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                    `json:"started"`
	Status    PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsRemoveTargetResponse struct {
	ActionResponse *PostLoadBalancersIDActionsRemoveTarget201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
