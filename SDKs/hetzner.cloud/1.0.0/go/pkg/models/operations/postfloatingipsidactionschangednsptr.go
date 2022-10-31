package operations



type PostFloatingIpsIDActionsChangeDNSPtrPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostFloatingIpsIDActionsChangeDNSPtrChangeDnsptrRequest struct {
    DNSPtr string `json:"dns_ptr"`
    IP string `json:"ip"`
    
}

type PostFloatingIpsIDActionsChangeDNSPtrRequest struct {
    PathParams PostFloatingIpsIDActionsChangeDNSPtrPathParams 
    Request *PostFloatingIpsIDActionsChangeDNSPtrChangeDnsptrRequest `request:"mediaType=application/json"`
    
}

type PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnum string

const (
    PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnumSuccess PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnum = "success"
PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnumRunning PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnum = "running"
PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnumError PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnum = "error"
)


type PostFloatingIpsIDActionsChangeDNSPtrActionResponseAction struct {
    Command string `json:"command"`
    Error PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostFloatingIpsIDActionsChangeDNSPtrActionResponseActionStatusEnum `json:"status"`
    
}

type PostFloatingIpsIDActionsChangeDNSPtrActionResponse struct {
    Action PostFloatingIpsIDActionsChangeDNSPtrActionResponseAction `json:"action"`
    
}

type PostFloatingIpsIDActionsChangeDNSPtrResponse struct {
    ActionResponse *PostFloatingIpsIDActionsChangeDNSPtrActionResponse 
    ContentType string 
    StatusCode int64 
    
}

