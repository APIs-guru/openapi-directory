package operations

type GetFirewallsIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFirewallsIDActionsActionIDRequest struct {
	PathParams GetFirewallsIDActionsActionIDPathParams
}

type GetFirewallsIDActionsActionIDActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetFirewallsIDActionsActionIDActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetFirewallsIDActionsActionIDActionResponseActionStatusEnum string

const (
	GetFirewallsIDActionsActionIDActionResponseActionStatusEnumSuccess GetFirewallsIDActionsActionIDActionResponseActionStatusEnum = "success"
	GetFirewallsIDActionsActionIDActionResponseActionStatusEnumRunning GetFirewallsIDActionsActionIDActionResponseActionStatusEnum = "running"
	GetFirewallsIDActionsActionIDActionResponseActionStatusEnumError   GetFirewallsIDActionsActionIDActionResponseActionStatusEnum = "error"
)

type GetFirewallsIDActionsActionIDActionResponseAction struct {
	Command   string                                                       `json:"command"`
	Error     GetFirewallsIDActionsActionIDActionResponseActionError       `json:"error"`
	Finished  string                                                       `json:"finished"`
	ID        int64                                                        `json:"id"`
	Progress  float64                                                      `json:"progress"`
	Resources []GetFirewallsIDActionsActionIDActionResponseActionResources `json:"resources"`
	Started   string                                                       `json:"started"`
	Status    GetFirewallsIDActionsActionIDActionResponseActionStatusEnum  `json:"status"`
}

type GetFirewallsIDActionsActionIDActionResponse struct {
	Action GetFirewallsIDActionsActionIDActionResponseAction `json:"action"`
}

type GetFirewallsIDActionsActionIDResponse struct {
	ActionResponse *GetFirewallsIDActionsActionIDActionResponse
	ContentType    string
	StatusCode     int64
}
