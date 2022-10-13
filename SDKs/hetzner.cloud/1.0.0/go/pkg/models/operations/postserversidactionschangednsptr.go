package operations

type PostServersIDActionsChangeDNSPtrPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostServersIDActionsChangeDNSPtrRequestBody struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

type PostServersIDActionsChangeDNSPtrRequest struct {
	PathParams PostServersIDActionsChangeDNSPtrPathParams
	Request    *PostServersIDActionsChangeDNSPtrRequestBody `request:"mediaType=application/json"`
}

type PostServersIDActionsChangeDNSPtr201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersIDActionsChangeDNSPtr201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum string

const (
	PostServersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum = "success"
	PostServersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnumRunning PostServersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum = "running"
	PostServersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnumError   PostServersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum = "error"
)

type PostServersIDActionsChangeDNSPtr201ApplicationJSONActionAction struct {
	Command   string                                                              `json:"command"`
	Error     PostServersIDActionsChangeDNSPtr201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                              `json:"finished"`
	ID        int64                                                               `json:"id"`
	Progress  float64                                                             `json:"progress"`
	Resources []PostServersIDActionsChangeDNSPtr201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                              `json:"started"`
	Status    PostServersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServersIDActionsChangeDNSPtr201ApplicationJSONActionResponse struct {
	Action PostServersIDActionsChangeDNSPtr201ApplicationJSONActionAction `json:"action"`
}

type PostServersIDActionsChangeDNSPtrResponse struct {
	ActionResponse *PostServersIDActionsChangeDNSPtr201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
