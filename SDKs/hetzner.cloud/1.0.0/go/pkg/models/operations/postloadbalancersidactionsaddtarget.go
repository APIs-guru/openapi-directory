package operations

type PostLoadBalancersIDActionsAddTargetPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsAddTargetRequestBodyIP struct {
	IP string `json:"ip"`
}

type PostLoadBalancersIDActionsAddTargetRequestBodyLabelSelector struct {
	Selector string `json:"selector"`
}

type PostLoadBalancersIDActionsAddTargetRequestBodyServer struct {
	ID float64 `json:"id"`
}

type PostLoadBalancersIDActionsAddTargetRequestBodyTypeEnum string

const (
	PostLoadBalancersIDActionsAddTargetRequestBodyTypeEnumServer        PostLoadBalancersIDActionsAddTargetRequestBodyTypeEnum = "server"
	PostLoadBalancersIDActionsAddTargetRequestBodyTypeEnumLabelSelector PostLoadBalancersIDActionsAddTargetRequestBodyTypeEnum = "label_selector"
	PostLoadBalancersIDActionsAddTargetRequestBodyTypeEnumIP            PostLoadBalancersIDActionsAddTargetRequestBodyTypeEnum = "ip"
)

type PostLoadBalancersIDActionsAddTargetRequestBodyAddTargetRequest struct {
	IP            *PostLoadBalancersIDActionsAddTargetRequestBodyIP            `json:"ip"`
	LabelSelector *PostLoadBalancersIDActionsAddTargetRequestBodyLabelSelector `json:"label_selector"`
	Server        *PostLoadBalancersIDActionsAddTargetRequestBodyServer        `json:"server"`
	Type          PostLoadBalancersIDActionsAddTargetRequestBodyTypeEnum       `json:"type"`
	UsePrivateIP  *bool                                                        `json:"use_private_ip"`
}

type PostLoadBalancersIDActionsAddTargetRequest struct {
	PathParams PostLoadBalancersIDActionsAddTargetPathParams
	Request    *PostLoadBalancersIDActionsAddTargetRequestBodyAddTargetRequest `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionAction struct {
	Command   string                                                                 `json:"command"`
	Error     PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                 `json:"finished"`
	ID        int64                                                                  `json:"id"`
	Progress  float64                                                                `json:"progress"`
	Resources []PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                 `json:"started"`
	Status    PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsAddTargetResponse struct {
	ActionResponse *PostLoadBalancersIDActionsAddTarget201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
