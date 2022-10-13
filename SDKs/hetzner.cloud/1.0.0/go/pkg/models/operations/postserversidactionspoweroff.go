package operations

type PostServersIDActionsPoweroffPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsPoweroffRequest struct {
	PathParams PostServersIDActionsPoweroffPathParams
}

type PostServersIDActionsPoweroff201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsPoweroff201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsPoweroff201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsPoweroff201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsPoweroff201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsPoweroff201ApplicationJSONActionStatusEnumRunning PostServersIDActionsPoweroff201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsPoweroff201ApplicationJSONActionStatusEnumError   PostServersIDActionsPoweroff201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsPoweroff201ApplicationJSONActionAction struct {
	Command   string                                                          `json:"command"`
	Error     PostServersIDActionsPoweroff201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                          `json:"finished"`
	ID        int64                                                           `json:"id"`
	Progress  float64                                                         `json:"progress"`
	Resources []PostServersIDActionsPoweroff201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                          `json:"started"`
	Status    PostServersIDActionsPoweroff201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsPoweroff201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsPoweroff201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsPoweroffResponse struct {
	ActionResponse *PostServersIDActionsPoweroff201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
