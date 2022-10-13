package operations

type GetFloatingIpsIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFloatingIpsIDActionsActionIDRequest struct {
	PathParams GetFloatingIpsIDActionsActionIDPathParams
}

type GetFloatingIpsIDActionsActionID200ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetFloatingIpsIDActionsActionID200ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetFloatingIpsIDActionsActionID200ApplicationJSONActionStatusEnum string

const (
	GetFloatingIpsIDActionsActionID200ApplicationJSONActionStatusEnumSuccess GetFloatingIpsIDActionsActionID200ApplicationJSONActionStatusEnum = "success"
	GetFloatingIpsIDActionsActionID200ApplicationJSONActionStatusEnumRunning GetFloatingIpsIDActionsActionID200ApplicationJSONActionStatusEnum = "running"
	GetFloatingIpsIDActionsActionID200ApplicationJSONActionStatusEnumError   GetFloatingIpsIDActionsActionID200ApplicationJSONActionStatusEnum = "error"
)

type GetFloatingIpsIDActionsActionID200ApplicationJSONActionAction struct {
	Command   string                                                             `json:"command"`
	Error     GetFloatingIpsIDActionsActionID200ApplicationJSONActionError       `json:"error"`
	Finished  string                                                             `json:"finished"`
	ID        int64                                                              `json:"id"`
	Progress  float64                                                            `json:"progress"`
	Resources []GetFloatingIpsIDActionsActionID200ApplicationJSONActionResources `json:"resources"`
	Started   string                                                             `json:"started"`
	Status    GetFloatingIpsIDActionsActionID200ApplicationJSONActionStatusEnum  `json:"status"`
}

type GetFloatingIpsIDActionsActionID200ApplicationJSONActionResponse struct {
	Action GetFloatingIpsIDActionsActionID200ApplicationJSONActionAction `json:"action"`
}

type GetFloatingIpsIDActionsActionIDResponse struct {
	ActionResponse *GetFloatingIpsIDActionsActionID200ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
