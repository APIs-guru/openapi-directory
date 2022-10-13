package operations

type GetNetworksIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetNetworksIDActionsActionIDRequest struct {
	PathParams GetNetworksIDActionsActionIDPathParams
}

type GetNetworksIDActionsActionID200ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetNetworksIDActionsActionID200ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetNetworksIDActionsActionID200ApplicationJSONActionStatusEnum string

const (
	GetNetworksIDActionsActionID200ApplicationJSONActionStatusEnumSuccess GetNetworksIDActionsActionID200ApplicationJSONActionStatusEnum = "success"
	GetNetworksIDActionsActionID200ApplicationJSONActionStatusEnumRunning GetNetworksIDActionsActionID200ApplicationJSONActionStatusEnum = "running"
	GetNetworksIDActionsActionID200ApplicationJSONActionStatusEnumError   GetNetworksIDActionsActionID200ApplicationJSONActionStatusEnum = "error"
)

type GetNetworksIDActionsActionID200ApplicationJSONActionAction struct {
	Command   string                                                          `json:"command"`
	Error     GetNetworksIDActionsActionID200ApplicationJSONActionError       `json:"error"`
	Finished  string                                                          `json:"finished"`
	ID        int64                                                           `json:"id"`
	Progress  float64                                                         `json:"progress"`
	Resources []GetNetworksIDActionsActionID200ApplicationJSONActionResources `json:"resources"`
	Started   string                                                          `json:"started"`
	Status    GetNetworksIDActionsActionID200ApplicationJSONActionStatusEnum  `json:"status"`
}

type GetNetworksIDActionsActionID200ApplicationJSONActionResponse struct {
	Action GetNetworksIDActionsActionID200ApplicationJSONActionAction `json:"action"`
}

type GetNetworksIDActionsActionIDResponse struct {
	ActionResponse *GetNetworksIDActionsActionID200ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
