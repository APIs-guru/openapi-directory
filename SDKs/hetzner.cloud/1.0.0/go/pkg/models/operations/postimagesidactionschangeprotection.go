package operations

type PostImagesIDActionsChangeProtectionPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostImagesIDActionsChangeProtectionRequestBody struct {
	Delete *bool `json:"delete,omitempty"`
}

type PostImagesIDActionsChangeProtectionRequest struct {
	PathParams PostImagesIDActionsChangeProtectionPathParams
	Request    *PostImagesIDActionsChangeProtectionRequestBody `request:"mediaType=application/json"`
}

type PostImagesIDActionsChangeProtectionActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostImagesIDActionsChangeProtectionActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostImagesIDActionsChangeProtectionActionResponseActionStatusEnum string

const (
	PostImagesIDActionsChangeProtectionActionResponseActionStatusEnumSuccess PostImagesIDActionsChangeProtectionActionResponseActionStatusEnum = "success"
	PostImagesIDActionsChangeProtectionActionResponseActionStatusEnumRunning PostImagesIDActionsChangeProtectionActionResponseActionStatusEnum = "running"
	PostImagesIDActionsChangeProtectionActionResponseActionStatusEnumError   PostImagesIDActionsChangeProtectionActionResponseActionStatusEnum = "error"
)

type PostImagesIDActionsChangeProtectionActionResponseAction struct {
	Command   string                                                             `json:"command"`
	Error     PostImagesIDActionsChangeProtectionActionResponseActionError       `json:"error"`
	Finished  string                                                             `json:"finished"`
	ID        int64                                                              `json:"id"`
	Progress  float64                                                            `json:"progress"`
	Resources []PostImagesIDActionsChangeProtectionActionResponseActionResources `json:"resources"`
	Started   string                                                             `json:"started"`
	Status    PostImagesIDActionsChangeProtectionActionResponseActionStatusEnum  `json:"status"`
}

type PostImagesIDActionsChangeProtectionActionResponse struct {
	Action PostImagesIDActionsChangeProtectionActionResponseAction `json:"action"`
}

type PostImagesIDActionsChangeProtectionResponse struct {
	ActionResponse *PostImagesIDActionsChangeProtectionActionResponse
	ContentType    string
	StatusCode     int64
}
