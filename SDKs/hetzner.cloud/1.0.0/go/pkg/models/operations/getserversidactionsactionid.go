package operations

type GetServersIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetServersIDActionsActionIDRequest struct {
	PathParams GetServersIDActionsActionIDPathParams
}

type GetServersIDActionsActionID200ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetServersIDActionsActionID200ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetServersIDActionsActionID200ApplicationJSONActionStatusEnum string

const (
	GetServersIDActionsActionID200ApplicationJSONActionStatusEnumSuccess GetServersIDActionsActionID200ApplicationJSONActionStatusEnum = "success"
	GetServersIDActionsActionID200ApplicationJSONActionStatusEnumRunning GetServersIDActionsActionID200ApplicationJSONActionStatusEnum = "running"
	GetServersIDActionsActionID200ApplicationJSONActionStatusEnumError   GetServersIDActionsActionID200ApplicationJSONActionStatusEnum = "error"
)

type GetServersIDActionsActionID200ApplicationJSONActionAction struct {
	Command   string                                                         `json:"command"`
	Error     GetServersIDActionsActionID200ApplicationJSONActionError       `json:"error"`
	Finished  string                                                         `json:"finished"`
	ID        int64                                                          `json:"id"`
	Progress  float64                                                        `json:"progress"`
	Resources []GetServersIDActionsActionID200ApplicationJSONActionResources `json:"resources"`
	Started   string                                                         `json:"started"`
	Status    GetServersIDActionsActionID200ApplicationJSONActionStatusEnum  `json:"status"`
}

type GetServersIDActionsActionID200ApplicationJSONActionResponse struct {
	Action GetServersIDActionsActionID200ApplicationJSONActionAction `json:"action"`
}

type GetServersIDActionsActionIDResponse struct {
	ActionResponse *GetServersIDActionsActionID200ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
