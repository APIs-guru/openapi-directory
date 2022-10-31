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

type PostVolumesIDActionsResizeActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostVolumesIDActionsResizeActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostVolumesIDActionsResizeActionResponseActionStatusEnum string

const (
	PostVolumesIDActionsResizeActionResponseActionStatusEnumSuccess PostVolumesIDActionsResizeActionResponseActionStatusEnum = "success"
	PostVolumesIDActionsResizeActionResponseActionStatusEnumRunning PostVolumesIDActionsResizeActionResponseActionStatusEnum = "running"
	PostVolumesIDActionsResizeActionResponseActionStatusEnumError   PostVolumesIDActionsResizeActionResponseActionStatusEnum = "error"
)

type PostVolumesIDActionsResizeActionResponseAction struct {
	Command   string                                                    `json:"command"`
	Error     PostVolumesIDActionsResizeActionResponseActionError       `json:"error"`
	Finished  string                                                    `json:"finished"`
	ID        int64                                                     `json:"id"`
	Progress  float64                                                   `json:"progress"`
	Resources []PostVolumesIDActionsResizeActionResponseActionResources `json:"resources"`
	Started   string                                                    `json:"started"`
	Status    PostVolumesIDActionsResizeActionResponseActionStatusEnum  `json:"status"`
}

type PostVolumesIDActionsResizeActionResponse struct {
	Action PostVolumesIDActionsResizeActionResponseAction `json:"action"`
}

type PostVolumesIDActionsResizeResponse struct {
	ActionResponse *PostVolumesIDActionsResizeActionResponse
	ContentType    string
	StatusCode     int64
}
