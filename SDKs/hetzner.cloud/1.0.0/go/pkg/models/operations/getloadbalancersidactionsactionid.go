package operations

type GetLoadBalancersIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetLoadBalancersIDActionsActionIDRequest struct {
	PathParams GetLoadBalancersIDActionsActionIDPathParams
}

type GetLoadBalancersIDActionsActionID200ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetLoadBalancersIDActionsActionID200ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetLoadBalancersIDActionsActionID200ApplicationJSONActionStatusEnum string

const (
	GetLoadBalancersIDActionsActionID200ApplicationJSONActionStatusEnumSuccess GetLoadBalancersIDActionsActionID200ApplicationJSONActionStatusEnum = "success"
	GetLoadBalancersIDActionsActionID200ApplicationJSONActionStatusEnumRunning GetLoadBalancersIDActionsActionID200ApplicationJSONActionStatusEnum = "running"
	GetLoadBalancersIDActionsActionID200ApplicationJSONActionStatusEnumError   GetLoadBalancersIDActionsActionID200ApplicationJSONActionStatusEnum = "error"
)

type GetLoadBalancersIDActionsActionID200ApplicationJSONActionAction struct {
	Command   string                                                               `json:"command"`
	Error     GetLoadBalancersIDActionsActionID200ApplicationJSONActionError       `json:"error"`
	Finished  string                                                               `json:"finished"`
	ID        int64                                                                `json:"id"`
	Progress  float64                                                              `json:"progress"`
	Resources []GetLoadBalancersIDActionsActionID200ApplicationJSONActionResources `json:"resources"`
	Started   string                                                               `json:"started"`
	Status    GetLoadBalancersIDActionsActionID200ApplicationJSONActionStatusEnum  `json:"status"`
}

type GetLoadBalancersIDActionsActionID200ApplicationJSONActionResponse struct {
	Action GetLoadBalancersIDActionsActionID200ApplicationJSONActionAction `json:"action"`
}

type GetLoadBalancersIDActionsActionIDResponse struct {
	ActionResponse *GetLoadBalancersIDActionsActionID200ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
