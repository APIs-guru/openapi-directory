package operations

type PostVolumesIDActionsResizePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostVolumesIDActionsResizeRequestBody struct {
	Size float64 `json:"size"`
}

type PostVolumesIDActionsResizeRequest struct {
	PathParams PostVolumesIDActionsResizePathParams
	Request    *PostVolumesIDActionsResizeRequestBody `request:"mediaType=application/json"`
}

type PostVolumesIDActionsResize201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostVolumesIDActionsResize201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostVolumesIDActionsResize201ApplicationJSONActionStatusEnum string

const (
	PostVolumesIDActionsResize201ApplicationJSONActionStatusEnumSuccess PostVolumesIDActionsResize201ApplicationJSONActionStatusEnum = "success"
	PostVolumesIDActionsResize201ApplicationJSONActionStatusEnumRunning PostVolumesIDActionsResize201ApplicationJSONActionStatusEnum = "running"
	PostVolumesIDActionsResize201ApplicationJSONActionStatusEnumError   PostVolumesIDActionsResize201ApplicationJSONActionStatusEnum = "error"
)

type PostVolumesIDActionsResize201ApplicationJSONActionAction struct {
	Command   string                                                        `json:"command"`
	Error     PostVolumesIDActionsResize201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                        `json:"finished"`
	ID        int64                                                         `json:"id"`
	Progress  float64                                                       `json:"progress"`
	Resources []PostVolumesIDActionsResize201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                        `json:"started"`
	Status    PostVolumesIDActionsResize201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostVolumesIDActionsResize201ApplicationJSONActionResponse struct {
	Action PostVolumesIDActionsResize201ApplicationJSONActionAction `json:"action"`
}

type PostVolumesIDActionsResizeResponse struct {
	ActionResponse *PostVolumesIDActionsResize201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
