package operations

type PostServersIDActionsPoweronPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsPoweronRequest struct {
	PathParams PostServersIDActionsPoweronPathParams
}

type PostServersIDActionsPoweron201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsPoweron201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsPoweron201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsPoweron201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsPoweron201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsPoweron201ApplicationJSONActionStatusEnumRunning PostServersIDActionsPoweron201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsPoweron201ApplicationJSONActionStatusEnumError   PostServersIDActionsPoweron201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsPoweron201ApplicationJSONActionAction struct {
	Command   string                                                         `json:"command"`
	Error     PostServersIDActionsPoweron201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                         `json:"finished"`
	ID        int64                                                          `json:"id"`
	Progress  float64                                                        `json:"progress"`
	Resources []PostServersIDActionsPoweron201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                         `json:"started"`
	Status    PostServersIDActionsPoweron201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsPoweron201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsPoweron201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsPoweronResponse struct {
	ActionResponse *PostServersIDActionsPoweron201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
