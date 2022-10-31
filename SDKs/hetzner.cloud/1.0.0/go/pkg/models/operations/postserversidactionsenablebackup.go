package operations

type PostServersIDActionsEnableBackupPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsEnableBackupRequest struct {
	PathParams PostServersIDActionsEnableBackupPathParams
}

type PostServersIDActionsEnableBackupActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsEnableBackupActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsEnableBackupActionResponseActionStatusEnum string

const (
	PostServersIDActionsEnableBackupActionResponseActionStatusEnumSuccess PostServersIDActionsEnableBackupActionResponseActionStatusEnum = "success"
	PostServersIDActionsEnableBackupActionResponseActionStatusEnumRunning PostServersIDActionsEnableBackupActionResponseActionStatusEnum = "running"
	PostServersIDActionsEnableBackupActionResponseActionStatusEnumError   PostServersIDActionsEnableBackupActionResponseActionStatusEnum = "error"
)

type PostServersIDActionsEnableBackupActionResponseAction struct {
	Command   string                                                          `json:"command"`
	Error     PostServersIDActionsEnableBackupActionResponseActionError       `json:"error"`
	Finished  string                                                          `json:"finished"`
	ID        int64                                                           `json:"id"`
	Progress  float64                                                         `json:"progress"`
	Resources []PostServersIDActionsEnableBackupActionResponseActionResources `json:"resources"`
	Started   string                                                          `json:"started"`
	Status    PostServersIDActionsEnableBackupActionResponseActionStatusEnum  `json:"status"`
}

type PostServersIDActionsEnableBackupActionResponse struct {
	Action PostServersIDActionsEnableBackupActionResponseAction `json:"action"`
}

type PostServersIDActionsEnableBackupResponse struct {
	ActionResponse *PostServersIDActionsEnableBackupActionResponse
	ContentType    string
	StatusCode     int64
}
