package operations

type DeleteServersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// DeleteServersID200ApplicationJSONActionError
// Error message for the Action if error occurred, otherwise null
type DeleteServersID200ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type DeleteServersID200ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type DeleteServersID200ApplicationJSONActionStatusEnum string

const (
	DeleteServersID200ApplicationJSONActionStatusEnumSuccess DeleteServersID200ApplicationJSONActionStatusEnum = "success"
	DeleteServersID200ApplicationJSONActionStatusEnumRunning DeleteServersID200ApplicationJSONActionStatusEnum = "running"
	DeleteServersID200ApplicationJSONActionStatusEnumError   DeleteServersID200ApplicationJSONActionStatusEnum = "error"
)

type DeleteServersID200ApplicationJSONAction struct {
	Command   string                                             `json:"command"`
	Error     DeleteServersID200ApplicationJSONActionError       `json:"error"`
	Finished  string                                             `json:"finished"`
	ID        int64                                              `json:"id"`
	Progress  float64                                            `json:"progress"`
	Resources []DeleteServersID200ApplicationJSONActionResources `json:"resources"`
	Started   string                                             `json:"started"`
	Status    DeleteServersID200ApplicationJSONActionStatusEnum  `json:"status"`
}

type DeleteServersID200ApplicationJSON struct {
	Action *DeleteServersID200ApplicationJSONAction `json:"action,omitempty"`
}

type DeleteServersIDRequest struct {
	PathParams DeleteServersIDPathParams
}

type DeleteServersIDResponse struct {
	ContentType                             string
	DeleteServersID200ApplicationJSONObject *DeleteServersID200ApplicationJSON
	StatusCode                              int64
}
