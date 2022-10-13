package operations

type PostVolumesIDActionsDetachPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostVolumesIDActionsDetachRequest struct {
	PathParams PostVolumesIDActionsDetachPathParams
}

type PostVolumesIDActionsDetach201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostVolumesIDActionsDetach201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostVolumesIDActionsDetach201ApplicationJSONActionStatusEnum string

const (
	PostVolumesIDActionsDetach201ApplicationJSONActionStatusEnumSuccess PostVolumesIDActionsDetach201ApplicationJSONActionStatusEnum = "success"
	PostVolumesIDActionsDetach201ApplicationJSONActionStatusEnumRunning PostVolumesIDActionsDetach201ApplicationJSONActionStatusEnum = "running"
	PostVolumesIDActionsDetach201ApplicationJSONActionStatusEnumError   PostVolumesIDActionsDetach201ApplicationJSONActionStatusEnum = "error"
)

type PostVolumesIDActionsDetach201ApplicationJSONActionAction struct {
	Command   string                                                        `json:"command"`
	Error     PostVolumesIDActionsDetach201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                        `json:"finished"`
	ID        int64                                                         `json:"id"`
	Progress  float64                                                       `json:"progress"`
	Resources []PostVolumesIDActionsDetach201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                        `json:"started"`
	Status    PostVolumesIDActionsDetach201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostVolumesIDActionsDetach201ApplicationJSONActionResponse struct {
	Action PostVolumesIDActionsDetach201ApplicationJSONActionAction `json:"action"`
}

type PostVolumesIDActionsDetachResponse struct {
	ActionResponse *PostVolumesIDActionsDetach201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
