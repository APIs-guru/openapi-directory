package operations

type PostServersIDActionsDetachFromNetworkPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsDetachFromNetworkRequestBodyDetachFromNetworkRequest struct {
	Network int64 `json:"network"`
}

type PostServersIDActionsDetachFromNetworkRequest struct {
	PathParams PostServersIDActionsDetachFromNetworkPathParams
	Request    *PostServersIDActionsDetachFromNetworkRequestBodyDetachFromNetworkRequest `request:"mediaType=application/json"`
}

type PostServersIDActionsDetachFromNetwork201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsDetachFromNetwork201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnumRunning PostServersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnumError   PostServersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsDetachFromNetwork201ApplicationJSONActionAction struct {
	Command   string                                                                   `json:"command"`
	Error     PostServersIDActionsDetachFromNetwork201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                   `json:"finished"`
	ID        int64                                                                    `json:"id"`
	Progress  float64                                                                  `json:"progress"`
	Resources []PostServersIDActionsDetachFromNetwork201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                   `json:"started"`
	Status    PostServersIDActionsDetachFromNetwork201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsDetachFromNetwork201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsDetachFromNetwork201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsDetachFromNetworkResponse struct {
	ActionResponse *PostServersIDActionsDetachFromNetwork201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
