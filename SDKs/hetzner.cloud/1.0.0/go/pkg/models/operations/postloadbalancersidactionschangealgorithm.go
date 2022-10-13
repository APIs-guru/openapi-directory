package operations

type PostLoadBalancersIDActionsChangeAlgorithmPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnum string

const (
	PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnumRoundRobin       PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnum = "round_robin"
	PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnumLeastConnections PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnum = "least_connections"
)

type PostLoadBalancersIDActionsChangeAlgorithmRequestBody struct {
	Type PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnum `json:"type"`
}

type PostLoadBalancersIDActionsChangeAlgorithmRequest struct {
	PathParams PostLoadBalancersIDActionsChangeAlgorithmPathParams
	Request    *PostLoadBalancersIDActionsChangeAlgorithmRequestBody `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionAction struct {
	Command   string                                                                       `json:"command"`
	Error     PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                       `json:"finished"`
	ID        int64                                                                        `json:"id"`
	Progress  float64                                                                      `json:"progress"`
	Resources []PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                       `json:"started"`
	Status    PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsChangeAlgorithmResponse struct {
	ActionResponse *PostLoadBalancersIDActionsChangeAlgorithm201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
