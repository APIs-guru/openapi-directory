package operations

type PostServersIDActionsAttachToNetworkPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsAttachToNetworkRequestBodyAttachToNetworkRequest struct {
	AliasIps []string `json:"alias_ips,omitempty"`
	IP       *string  `json:"ip,omitempty"`
	Network  int64    `json:"network"`
}

type PostServersIDActionsAttachToNetworkRequest struct {
	PathParams PostServersIDActionsAttachToNetworkPathParams
	Request    *PostServersIDActionsAttachToNetworkRequestBodyAttachToNetworkRequest `request:"mediaType=application/json"`
}

type PostServersIDActionsAttachToNetwork201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsAttachToNetwork201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnumRunning PostServersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnumError   PostServersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsAttachToNetwork201ApplicationJSONActionAction struct {
	Command   string                                                                 `json:"command"`
	Error     PostServersIDActionsAttachToNetwork201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                 `json:"finished"`
	ID        int64                                                                  `json:"id"`
	Progress  float64                                                                `json:"progress"`
	Resources []PostServersIDActionsAttachToNetwork201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                 `json:"started"`
	Status    PostServersIDActionsAttachToNetwork201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsAttachToNetwork201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsAttachToNetwork201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsAttachToNetworkResponse struct {
	ActionResponse *PostServersIDActionsAttachToNetwork201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
