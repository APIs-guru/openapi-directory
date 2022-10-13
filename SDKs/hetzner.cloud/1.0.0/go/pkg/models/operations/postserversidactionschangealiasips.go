package operations

type PostServersIDActionsChangeAliasIpsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsChangeAliasIpsRequestBody struct {
	AliasIps []string `json:"alias_ips"`
	Network  int64    `json:"network"`
}

type PostServersIDActionsChangeAliasIpsRequest struct {
	PathParams PostServersIDActionsChangeAliasIpsPathParams
	Request    *PostServersIDActionsChangeAliasIpsRequestBody `request:"mediaType=application/json"`
}

type PostServersIDActionsChangeAliasIps201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsChangeAliasIps201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsChangeAliasIps201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsChangeAliasIps201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsChangeAliasIps201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsChangeAliasIps201ApplicationJSONActionStatusEnumRunning PostServersIDActionsChangeAliasIps201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsChangeAliasIps201ApplicationJSONActionStatusEnumError   PostServersIDActionsChangeAliasIps201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsChangeAliasIps201ApplicationJSONActionAction struct {
	Command   string                                                                `json:"command"`
	Error     PostServersIDActionsChangeAliasIps201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                `json:"finished"`
	ID        int64                                                                 `json:"id"`
	Progress  float64                                                               `json:"progress"`
	Resources []PostServersIDActionsChangeAliasIps201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                `json:"started"`
	Status    PostServersIDActionsChangeAliasIps201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsChangeAliasIps201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsChangeAliasIps201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsChangeAliasIpsResponse struct {
	ActionResponse *PostServersIDActionsChangeAliasIps201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
