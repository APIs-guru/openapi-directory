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

type PostServersIDActionsChangeTypeActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsChangeTypeActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsChangeTypeActionResponseActionStatusEnum string

const (
	PostServersIDActionsChangeTypeActionResponseActionStatusEnumSuccess PostServersIDActionsChangeTypeActionResponseActionStatusEnum = "success"
	PostServersIDActionsChangeTypeActionResponseActionStatusEnumRunning PostServersIDActionsChangeTypeActionResponseActionStatusEnum = "running"
	PostServersIDActionsChangeTypeActionResponseActionStatusEnumError   PostServersIDActionsChangeTypeActionResponseActionStatusEnum = "error"
)

type PostServersIDActionsChangeTypeActionResponseAction struct {
	Command   string                                                        `json:"command"`
	Error     PostServersIDActionsChangeTypeActionResponseActionError       `json:"error"`
	Finished  string                                                        `json:"finished"`
	ID        int64                                                         `json:"id"`
	Progress  float64                                                       `json:"progress"`
	Resources []PostServersIDActionsChangeTypeActionResponseActionResources `json:"resources"`
	Started   string                                                        `json:"started"`
	Status    PostServersIDActionsChangeTypeActionResponseActionStatusEnum  `json:"status"`
}

type PostServersIDActionsChangeTypeActionResponse struct {
	Action PostServersIDActionsChangeTypeActionResponseAction `json:"action"`
}

type PostServersIDActionsChangeTypeResponse struct {
	ActionResponse *PostServersIDActionsChangeTypeActionResponse
	ContentType    string
	StatusCode     int64
}
