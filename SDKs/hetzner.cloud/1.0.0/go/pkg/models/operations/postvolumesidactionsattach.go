package operations

type PostVolumesIDActionsAttachPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostVolumesIDActionsAttachAttachVolumeRequest struct {
	Automount *bool `json:"automount,omitempty"`
	Server    int64 `json:"server"`
}

type PostVolumesIDActionsAttachRequest struct {
	PathParams PostVolumesIDActionsAttachPathParams
	Request    *PostVolumesIDActionsAttachAttachVolumeRequest `request:"mediaType=application/json"`
}

type PostVolumesIDActionsAttachActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostVolumesIDActionsAttachActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostVolumesIDActionsAttachActionResponseActionStatusEnum string

const (
	PostVolumesIDActionsAttachActionResponseActionStatusEnumSuccess PostVolumesIDActionsAttachActionResponseActionStatusEnum = "success"
	PostVolumesIDActionsAttachActionResponseActionStatusEnumRunning PostVolumesIDActionsAttachActionResponseActionStatusEnum = "running"
	PostVolumesIDActionsAttachActionResponseActionStatusEnumError   PostVolumesIDActionsAttachActionResponseActionStatusEnum = "error"
)

type PostVolumesIDActionsAttachActionResponseAction struct {
	Command   string                                                    `json:"command"`
	Error     PostVolumesIDActionsAttachActionResponseActionError       `json:"error"`
	Finished  string                                                    `json:"finished"`
	ID        int64                                                     `json:"id"`
	Progress  float64                                                   `json:"progress"`
	Resources []PostVolumesIDActionsAttachActionResponseActionResources `json:"resources"`
	Started   string                                                    `json:"started"`
	Status    PostVolumesIDActionsAttachActionResponseActionStatusEnum  `json:"status"`
}

type PostVolumesIDActionsAttachActionResponse struct {
	Action PostVolumesIDActionsAttachActionResponseAction `json:"action"`
}

type PostVolumesIDActionsAttachResponse struct {
	ActionResponse *PostVolumesIDActionsAttachActionResponse
	ContentType    string
	StatusCode     int64
}
