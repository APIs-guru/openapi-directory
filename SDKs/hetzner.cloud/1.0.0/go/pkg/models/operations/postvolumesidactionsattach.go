package operations

type PostVolumesIDActionsAttachPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostVolumesIDActionsAttachRequestBodyAttachVolumeRequest struct {
	Automount *bool `json:"automount"`
	Server    int64 `json:"server"`
}

type PostVolumesIDActionsAttachRequest struct {
	PathParams PostVolumesIDActionsAttachPathParams
	Request    *PostVolumesIDActionsAttachRequestBodyAttachVolumeRequest `request:"mediaType=application/json"`
}

type PostVolumesIDActionsAttach201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostVolumesIDActionsAttach201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostVolumesIDActionsAttach201ApplicationJSONActionStatusEnum string

const (
	PostVolumesIDActionsAttach201ApplicationJSONActionStatusEnumSuccess PostVolumesIDActionsAttach201ApplicationJSONActionStatusEnum = "success"
	PostVolumesIDActionsAttach201ApplicationJSONActionStatusEnumRunning PostVolumesIDActionsAttach201ApplicationJSONActionStatusEnum = "running"
	PostVolumesIDActionsAttach201ApplicationJSONActionStatusEnumError   PostVolumesIDActionsAttach201ApplicationJSONActionStatusEnum = "error"
)

type PostVolumesIDActionsAttach201ApplicationJSONActionAction struct {
	Command   string                                                        `json:"command"`
	Error     PostVolumesIDActionsAttach201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                        `json:"finished"`
	ID        int64                                                         `json:"id"`
	Progress  float64                                                       `json:"progress"`
	Resources []PostVolumesIDActionsAttach201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                        `json:"started"`
	Status    PostVolumesIDActionsAttach201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostVolumesIDActionsAttach201ApplicationJSONActionResponse struct {
	Action PostVolumesIDActionsAttach201ApplicationJSONActionAction `json:"action"`
}

type PostVolumesIDActionsAttachResponse struct {
	ActionResponse *PostVolumesIDActionsAttach201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
