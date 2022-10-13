package operations

type PostLoadBalancersIDActionsChangeDNSPtrPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsChangeDNSPtrRequestBodyChangeLoadbalancerDNSPtrRequest struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

type PostLoadBalancersIDActionsChangeDNSPtrRequest struct {
	PathParams PostLoadBalancersIDActionsChangeDNSPtrPathParams
	Request    *PostLoadBalancersIDActionsChangeDNSPtrRequestBodyChangeLoadbalancerDNSPtrRequest `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum string

const (
	PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnumSuccess PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum = "success"
	PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnumRunning PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum = "running"
	PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnumError   PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionAction struct {
	Command   string                                                                    `json:"command"`
	Error     PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionError       `json:"error"`
	Finished  string                                                                    `json:"finished"`
	ID        int64                                                                     `json:"id"`
	Progress  float64                                                                   `json:"progress"`
	Resources []PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionResources `json:"resources"`
	Started   string                                                                    `json:"started"`
	Status    PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionResponse struct {
	Action PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionAction `json:"action"`
}

type PostLoadBalancersIDActionsChangeDNSPtrResponse struct {
	ActionResponse *PostLoadBalancersIDActionsChangeDNSPtr201ApplicationJSONActionResponse
	ContentType    string
	StatusCode     int64
}
