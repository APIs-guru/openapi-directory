package operations

type PostServersIDActionsChangeTypePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsChangeTypeRequestBody struct {
	ServerType  string `json:"server_type"`
	UpgradeDisk bool   `json:"upgrade_disk"`
}

type PostServersIDActionsChangeTypeRequest struct {
	PathParams PostServersIDActionsChangeTypePathParams
	Request    *PostServersIDActionsChangeTypeRequestBody `request:"mediaType=application/json"`
}

type PostServersIDActionsChangeType201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsChangeType201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsChangeType201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsChangeType201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsChangeType201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsChangeType201ApplicationJSONActionStatusEnumRunning PostServersIDActionsChangeType201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsChangeType201ApplicationJSONActionStatusEnumError   PostServersIDActionsChangeType201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsChangeType201ApplicationJSONActionAction struct {
	Command   string                                                            `json:"command"`
	Error     PostServersIDActionsChangeType201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                            `json:"finished"`
	ID        int64                                                             `json:"id"`
	Progress  float64                                                           `json:"progress"`
	Resources []PostServersIDActionsChangeType201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                            `json:"started"`
	Status    PostServersIDActionsChangeType201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsChangeType201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsChangeType201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsChangeTypeResponse struct {
	ActionResponse *PostServersIDActionsChangeType201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
