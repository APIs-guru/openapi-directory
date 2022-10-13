package operations

type GetVolumesIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetVolumesIDActionsActionIDRequest struct {
	PathParams GetVolumesIDActionsActionIDPathParams
}

type GetVolumesIDActionsActionID200ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetVolumesIDActionsActionID200ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetVolumesIDActionsActionID200ApplicationJSONActionStatusEnum string

const (
	GetVolumesIDActionsActionID200ApplicationJSONActionStatusEnumSuccess GetVolumesIDActionsActionID200ApplicationJSONActionStatusEnum = "success"
	GetVolumesIDActionsActionID200ApplicationJSONActionStatusEnumRunning GetVolumesIDActionsActionID200ApplicationJSONActionStatusEnum = "running"
	GetVolumesIDActionsActionID200ApplicationJSONActionStatusEnumError   GetVolumesIDActionsActionID200ApplicationJSONActionStatusEnum = "error"
)

type GetVolumesIDActionsActionID200ApplicationJSONActionAction struct {
	Command   string                                                         `json:"command"`
	Error     GetVolumesIDActionsActionID200ApplicationJSONActionError       `json:"error"`
	Finished  string                                                         `json:"finished"`
	ID        int64                                                          `json:"id"`
	Progress  float64                                                        `json:"progress"`
	Resources []GetVolumesIDActionsActionID200ApplicationJSONActionResources `json:"resources"`
	Started   string                                                         `json:"started"`
	Status    GetVolumesIDActionsActionID200ApplicationJSONActionStatusEnum  `json:"status"`
}

type GetVolumesIDActionsActionID200ApplicationJSONActionResponse struct {
	Action GetVolumesIDActionsActionID200ApplicationJSONActionAction `json:"action"`
}

type GetVolumesIDActionsActionIDResponse struct {
	ActionResponse *GetVolumesIDActionsActionID200ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
