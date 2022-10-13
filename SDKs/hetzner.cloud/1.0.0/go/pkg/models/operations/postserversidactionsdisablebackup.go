package operations

type PostServersIDActionsDisableBackupPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsDisableBackupRequest struct {
	PathParams PostServersIDActionsDisableBackupPathParams
}

type PostServersIDActionsDisableBackup201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsDisableBackup201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsDisableBackup201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsDisableBackup201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsDisableBackup201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsDisableBackup201ApplicationJSONActionStatusEnumRunning PostServersIDActionsDisableBackup201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsDisableBackup201ApplicationJSONActionStatusEnumError   PostServersIDActionsDisableBackup201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsDisableBackup201ApplicationJSONActionAction struct {
	Command   string                                                               `json:"command"`
	Error     PostServersIDActionsDisableBackup201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                               `json:"finished"`
	ID        int64                                                                `json:"id"`
	Progress  float64                                                              `json:"progress"`
	Resources []PostServersIDActionsDisableBackup201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                               `json:"started"`
	Status    PostServersIDActionsDisableBackup201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsDisableBackup201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsDisableBackup201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsDisableBackupResponse struct {
	ActionResponse *PostServersIDActionsDisableBackup201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
