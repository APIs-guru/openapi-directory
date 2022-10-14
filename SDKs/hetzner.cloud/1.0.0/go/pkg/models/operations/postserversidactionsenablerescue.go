package operations

type PostServersIDActionsEnableRescuePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsEnableRescueRequestBodyTypeEnum string

const (
	PostServersIDActionsEnableRescueRequestBodyTypeEnumLinux64   PostServersIDActionsEnableRescueRequestBodyTypeEnum = "linux64"
	PostServersIDActionsEnableRescueRequestBodyTypeEnumLinux32   PostServersIDActionsEnableRescueRequestBodyTypeEnum = "linux32"
	PostServersIDActionsEnableRescueRequestBodyTypeEnumFreebsd64 PostServersIDActionsEnableRescueRequestBodyTypeEnum = "freebsd64"
)

type PostServersIDActionsEnableRescueRequestBody struct {
	SSHKeys []int64                                              `json:"ssh_keys,omitempty"`
	Type    *PostServersIDActionsEnableRescueRequestBodyTypeEnum `json:"type,omitempty"`
}

type PostServersIDActionsEnableRescueRequest struct {
	PathParams PostServersIDActionsEnableRescuePathParams
	Request    *PostServersIDActionsEnableRescueRequestBody `request:"mediaType=application/json"`
}

type PostServersIDActionsEnableRescue201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsEnableRescue201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnumRunning PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnumError   PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsEnableRescue201ApplicationJSONActionAction struct {
	Command   string                                                              `json:"command"`
	Error     PostServersIDActionsEnableRescue201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                              `json:"finished"`
	ID        int64                                                               `json:"id"`
	Progress  float64                                                             `json:"progress"`
	Resources []PostServersIDActionsEnableRescue201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                              `json:"started"`
	Status    PostServersIDActionsEnableRescue201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsEnableRescue201ApplicationJSON struct {
	Action       *PostServersIDActionsEnableRescue201ApplicationJSONActionAction `json:"action,omitempty"`
	RootPassword *string                                                         `json:"root_password,omitempty"`
}

type PostServersIDActionsEnableRescueResponse struct {
	ContentType                                              string
	PostServersIDActionsEnableRescue201ApplicationJSONObject *PostServersIDActionsEnableRescue201ApplicationJSON
	StatusCode                                               int64
}
