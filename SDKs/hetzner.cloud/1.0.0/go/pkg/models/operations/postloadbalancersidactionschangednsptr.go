package operations

type PostLoadBalancersIDActionsChangeDNSPtrPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostLoadBalancersIDActionsChangeDNSPtrChangeLoadbalancerDNSPtrRequest struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

// PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionError
// Error message for the Action if error occurred, otherwise null
type PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnum string

const (
	PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnum = "success"
	PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnum = "running"
	PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnumError   PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnum = "error"
)

type PostLoadBalancersIDActionsChangeDNSPtrActionResponseAction struct {
	Command   string                                                                `json:"command"`
	Error     PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionError       `json:"error"`
	Finished  string                                                                `json:"finished"`
	ID        int64                                                                 `json:"id"`
	Progress  float64                                                               `json:"progress"`
	Resources []PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionResources `json:"resources"`
	Started   string                                                                `json:"started"`
	Status    PostLoadBalancersIDActionsChangeDNSPtrActionResponseActionStatusEnum  `json:"status"`
}

type PostLoadBalancersIDActionsChangeDNSPtrActionResponse struct {
	Action PostLoadBalancersIDActionsChangeDNSPtrActionResponseAction `json:"action"`
}

type PostLoadBalancersIDActionsChangeDNSPtrRequest struct {
	PathParams PostLoadBalancersIDActionsChangeDNSPtrPathParams
	Request    *PostLoadBalancersIDActionsChangeDNSPtrChangeLoadbalancerDNSPtrRequest `request:"mediaType=application/json"`
}

type PostLoadBalancersIDActionsChangeDNSPtrResponse struct {
	ActionResponse *PostLoadBalancersIDActionsChangeDNSPtrActionResponse
	ContentType    string
	StatusCode     int64
}
