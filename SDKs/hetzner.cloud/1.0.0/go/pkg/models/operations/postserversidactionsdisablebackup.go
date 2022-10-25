package operations

type PostServersIDActionsDisableBackupPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsDisableBackupRequest struct {
	PathParams PostServersIDActionsDisableBackupPathParams
}

type PostServersIDActionsDisableBackupActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsDisableBackupActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsDisableBackupActionResponseActionStatusEnum string

const (
	PostServersIDActionsDisableBackupActionResponseActionStatusEnumSuccess PostServersIDActionsDisableBackupActionResponseActionStatusEnum = "success"
	PostServersIDActionsDisableBackupActionResponseActionStatusEnumRunning PostServersIDActionsDisableBackupActionResponseActionStatusEnum = "running"
	PostServersIDActionsDisableBackupActionResponseActionStatusEnumError   PostServersIDActionsDisableBackupActionResponseActionStatusEnum = "error"
)

type PostServersIDActionsDisableBackupActionResponseAction struct {
	Command   string                                                           `json:"command"`
	Error     PostServersIDActionsDisableBackupActionResponseActionError       `json:"error"`
	Finished  string                                                           `json:"finished"`
	ID        int64                                                            `json:"id"`
	Progress  float64                                                          `json:"progress"`
	Resources []PostServersIDActionsDisableBackupActionResponseActionResources `json:"resources"`
	Started   string                                                           `json:"started"`
	Status    PostServersIDActionsDisableBackupActionResponseActionStatusEnum  `json:"status"`
}

type PostServersIDActionsDisableBackupActionResponse struct {
	Action PostServersIDActionsDisableBackupActionResponseAction `json:"action"`
}

type PostServersIDActionsDisableBackupResponse struct {
	ActionResponse *PostServersIDActionsDisableBackupActionResponse
	ContentType    string
	StatusCode     int64
}
