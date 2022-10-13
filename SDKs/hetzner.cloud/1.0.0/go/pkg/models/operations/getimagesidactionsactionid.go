package operations

type GetImagesIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetImagesIDActionsActionIDRequest struct {
	PathParams GetImagesIDActionsActionIDPathParams
}

type GetImagesIDActionsActionID200ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetImagesIDActionsActionID200ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetImagesIDActionsActionID200ApplicationJSONActionStatusEnum string

const (
	GetImagesIDActionsActionID200ApplicationJSONActionStatusEnumSuccess GetImagesIDActionsActionID200ApplicationJSONActionStatusEnum = "success"
	GetImagesIDActionsActionID200ApplicationJSONActionStatusEnumRunning GetImagesIDActionsActionID200ApplicationJSONActionStatusEnum = "running"
	GetImagesIDActionsActionID200ApplicationJSONActionStatusEnumError   GetImagesIDActionsActionID200ApplicationJSONActionStatusEnum = "error"
)

type GetImagesIDActionsActionID200ApplicationJSONActionAction struct {
	Command   string                                                        `json:"command"`
	Error     GetImagesIDActionsActionID200ApplicationJSONActionError       `json:"error"`
	Finished  string                                                        `json:"finished"`
	ID        int64                                                         `json:"id"`
	Progress  float64                                                       `json:"progress"`
	Resources []GetImagesIDActionsActionID200ApplicationJSONActionResources `json:"resources"`
	Started   string                                                        `json:"started"`
	Status    GetImagesIDActionsActionID200ApplicationJSONActionStatusEnum  `json:"status"`
}

type GetImagesIDActionsActionID200ApplicationJSONActionResponse struct {
	Action GetImagesIDActionsActionID200ApplicationJSONActionAction `json:"action"`
}

type GetImagesIDActionsActionIDResponse struct {
	ActionResponse *GetImagesIDActionsActionID200ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
