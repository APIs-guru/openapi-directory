package operations



type PostServersIDActionsChangeDNSPtrPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsChangeDNSPtrRequestBody struct {
    DNSPtr string `json:"dns_ptr"`
    IP string `json:"ip"`
    
}

type PostServersIDActionsChangeDNSPtrRequest struct {
    PathParams PostServersIDActionsChangeDNSPtrPathParams 
    Request *PostServersIDActionsChangeDNSPtrRequestBody `request:"mediaType=application/json"`
    
}

type PostServersIDActionsChangeDNSPtrActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsChangeDNSPtrActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsChangeDNSPtrActionResponseActionStatusEnum string

const (
    PostServersIDActionsChangeDNSPtrActionResponseActionStatusEnumSuccess PostServersIDActionsChangeDNSPtrActionResponseActionStatusEnum = "success"
PostServersIDActionsChangeDNSPtrActionResponseActionStatusEnumRunning PostServersIDActionsChangeDNSPtrActionResponseActionStatusEnum = "running"
PostServersIDActionsChangeDNSPtrActionResponseActionStatusEnumError PostServersIDActionsChangeDNSPtrActionResponseActionStatusEnum = "error"
)


type PostServersIDActionsChangeDNSPtrActionResponseAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsChangeDNSPtrActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsChangeDNSPtrActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsChangeDNSPtrActionResponseActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsChangeDNSPtrActionResponse struct {
    Action PostServersIDActionsChangeDNSPtrActionResponseAction `json:"action"`
    
}

type PostServersIDActionsChangeDNSPtrResponse struct {
    ActionResponse *PostServersIDActionsChangeDNSPtrActionResponse 
    ContentType string 
    StatusCode int64 
    
}

