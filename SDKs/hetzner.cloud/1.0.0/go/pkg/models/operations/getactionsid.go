package operations

type GetActionsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetActionsIDRequest struct {
	PathParams GetActionsIDPathParams
}

type GetActionsID200ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetActionsID200ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetActionsID200ApplicationJSONActionStatusEnum string

const (
	GetActionsID200ApplicationJSONActionStatusEnumSuccess GetActionsID200ApplicationJSONActionStatusEnum = "success"
	GetActionsID200ApplicationJSONActionStatusEnumRunning GetActionsID200ApplicationJSONActionStatusEnum = "running"
	GetActionsID200ApplicationJSONActionStatusEnumError   GetActionsID200ApplicationJSONActionStatusEnum = "error"
)

type GetActionsID200ApplicationJSONActionAction struct {
	Command   string                                          `json:"command"`
	Error     GetActionsID200ApplicationJSONActionError       `json:"error"`
	Finished  string                                          `json:"finished"`
	ID        int64                                           `json:"id"`
	Progress  float64                                         `json:"progress"`
	Resources []GetActionsID200ApplicationJSONActionResources `json:"resources"`
	Started   string                                          `json:"started"`
	Status    GetActionsID200ApplicationJSONActionStatusEnum  `json:"status"`
}

type GetActionsID200ApplicationJSONActionResponse struct {
	Action GetActionsID200ApplicationJSONActionAction `json:"action"`
}

type GetActionsIDResponse struct {
	ActionResponse *GetActionsID200ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
