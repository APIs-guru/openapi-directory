package operations

type PostServersIDActionsEnableBackupPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsEnableBackupRequest struct {
	PathParams PostServersIDActionsEnableBackupPathParams
}

type PostServersIDActionsEnableBackup201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsEnableBackup201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsEnableBackup201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsEnableBackup201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsEnableBackup201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsEnableBackup201ApplicationJSONActionStatusEnumRunning PostServersIDActionsEnableBackup201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsEnableBackup201ApplicationJSONActionStatusEnumError   PostServersIDActionsEnableBackup201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsEnableBackup201ApplicationJSONActionAction struct {
	Command   string                                                              `json:"command"`
	Error     PostServersIDActionsEnableBackup201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                              `json:"finished"`
	ID        int64                                                               `json:"id"`
	Progress  float64                                                             `json:"progress"`
	Resources []PostServersIDActionsEnableBackup201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                              `json:"started"`
	Status    PostServersIDActionsEnableBackup201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsEnableBackup201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsEnableBackup201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsEnableBackupResponse struct {
	ActionResponse *PostServersIDActionsEnableBackup201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
