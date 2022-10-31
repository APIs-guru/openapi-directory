package operations

type GetImagesIDActionsActionIDPathParams struct {
	ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
	ID       int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetImagesIDActionsActionIDRequest struct {
	PathParams GetImagesIDActionsActionIDPathParams
}

type GetImagesIDActionsActionIDActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type GetImagesIDActionsActionIDActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type GetImagesIDActionsActionIDActionResponseActionStatusEnum string

const (
	GetImagesIDActionsActionIDActionResponseActionStatusEnumSuccess GetImagesIDActionsActionIDActionResponseActionStatusEnum = "success"
	GetImagesIDActionsActionIDActionResponseActionStatusEnumRunning GetImagesIDActionsActionIDActionResponseActionStatusEnum = "running"
	GetImagesIDActionsActionIDActionResponseActionStatusEnumError   GetImagesIDActionsActionIDActionResponseActionStatusEnum = "error"
)

type GetImagesIDActionsActionIDActionResponseAction struct {
	Command   string                                                    `json:"command"`
	Error     GetImagesIDActionsActionIDActionResponseActionError       `json:"error"`
	Finished  string                                                    `json:"finished"`
	ID        int64                                                     `json:"id"`
	Progress  float64                                                   `json:"progress"`
	Resources []GetImagesIDActionsActionIDActionResponseActionResources `json:"resources"`
	Started   string                                                    `json:"started"`
	Status    GetImagesIDActionsActionIDActionResponseActionStatusEnum  `json:"status"`
}

type GetImagesIDActionsActionIDActionResponse struct {
	Action GetImagesIDActionsActionIDActionResponseAction `json:"action"`
}

type GetImagesIDActionsActionIDResponse struct {
	ActionResponse *GetImagesIDActionsActionIDActionResponse
	ContentType    string
	StatusCode     int64
}
