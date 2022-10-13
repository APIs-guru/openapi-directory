package operations

type PostServersIDActionsResetPasswordPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsResetPasswordRequest struct {
	PathParams PostServersIDActionsResetPasswordPathParams
}

type PostServersIDActionsResetPassword201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsResetPassword201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnumRunning PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnumError   PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsResetPassword201ApplicationJSONActionAction struct {
	Command   string                                                               `json:"command"`
	Error     PostServersIDActionsResetPassword201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                               `json:"finished"`
	ID        int64                                                                `json:"id"`
	Progress  float64                                                              `json:"progress"`
	Resources []PostServersIDActionsResetPassword201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                               `json:"started"`
	Status    PostServersIDActionsResetPassword201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsResetPassword201ApplicationJSON struct {
	Action       *PostServersIDActionsResetPassword201ApplicationJSONActionAction `json:"action"`
	RootPassword *string                                                          `json:"root_password"`
}

type PostServersIDActionsResetPasswordResponse struct {
	ContentType                                               string
	PostServersIDActionsResetPassword201ApplicationJSONObject *PostServersIDActionsResetPassword201ApplicationJSON
	StatusCode                                                int64
}
