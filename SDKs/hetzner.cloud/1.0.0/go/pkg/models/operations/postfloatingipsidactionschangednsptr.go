package operations

type PostFloatingIpsIDActionsChangeDNSPtrPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostFloatingIpsIDActionsChangeDNSPtrRequestBodyChangeDnsptrRequest struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

type PostFloatingIpsIDActionsChangeDNSPtrRequest struct {
	PathParams PostFloatingIpsIDActionsChangeDNSPtrPathParams
	Request    *PostFloatingIpsIDActionsChangeDNSPtrRequestBodyChangeDnsptrRequest `request:"mediaType=application/json"`
}

type PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum string

const (
	PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnumSuccess PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum = "success"
	PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnumRunning PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum = "running"
	PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnumError   PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum = "error"
)

type PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionAction struct {
	Command   string                                                                  `json:"command"`
	Error     PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                  `json:"finished"`
	ID        int64                                                                   `json:"id"`
	Progress  float64                                                                 `json:"progress"`
	Resources []PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                  `json:"started"`
	Status    PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionResponse struct {
	Action PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionAction `json:"action"`
}

type PostFloatingIpsIDActionsChangeDNSPtrResponse struct {
	ActionResponse *PostFloatingIpsIDActionsChangeDNSPtr201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
