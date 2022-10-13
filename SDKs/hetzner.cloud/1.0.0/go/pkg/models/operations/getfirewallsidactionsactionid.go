package operations

type GetFirewallsIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFirewallsIDActionsActionIDRequest struct {
	PathParams GetFirewallsIDActionsActionIDPathParams
}

type GetFirewallsIDActionsActionID200ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetFirewallsIDActionsActionID200ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetFirewallsIDActionsActionID200ApplicationJSONActionStatusEnum string

const (
	GetFirewallsIDActionsActionID200ApplicationJSONActionStatusEnumSuccess GetFirewallsIDActionsActionID200ApplicationJSONActionStatusEnum = "success"
	GetFirewallsIDActionsActionID200ApplicationJSONActionStatusEnumRunning GetFirewallsIDActionsActionID200ApplicationJSONActionStatusEnum = "running"
	GetFirewallsIDActionsActionID200ApplicationJSONActionStatusEnumError   GetFirewallsIDActionsActionID200ApplicationJSONActionStatusEnum = "error"
)

type GetFirewallsIDActionsActionID200ApplicationJSONActionAction struct {
	Command   string                                                           `json:"command"`
	Error     GetFirewallsIDActionsActionID200ApplicationJSONActionError       `json:"error"`
	Finished  string                                                           `json:"finished"`
	ID        int64                                                            `json:"id"`
	Progress  float64                                                          `json:"progress"`
	Resources []GetFirewallsIDActionsActionID200ApplicationJSONActionResources `json:"resources"`
	Started   string                                                           `json:"started"`
	Status    GetFirewallsIDActionsActionID200ApplicationJSONActionStatusEnum  `json:"status"`
}

type GetFirewallsIDActionsActionID200ApplicationJSONActionResponse struct {
	Action GetFirewallsIDActionsActionID200ApplicationJSONActionAction `json:"action"`
}

type GetFirewallsIDActionsActionIDResponse struct {
	ActionResponse *GetFirewallsIDActionsActionID200ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
