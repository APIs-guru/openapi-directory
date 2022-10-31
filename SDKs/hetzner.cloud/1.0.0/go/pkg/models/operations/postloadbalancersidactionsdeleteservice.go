package operations



type PostLoadBalancersIDActionsDeleteServicePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostLoadBalancersIDActionsDeleteServiceRequestBody struct {
    ListenPort float64 `json:"listen_port"`
    
}

type PostLoadBalancersIDActionsDeleteServiceRequest struct {
    PathParams PostLoadBalancersIDActionsDeleteServicePathParams 
    Request *PostLoadBalancersIDActionsDeleteServiceRequestBody `request:"mediaType=application/json"`
    
}

type PostLoadBalancersIDActionsDeleteServiceActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostLoadBalancersIDActionsDeleteServiceActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostLoadBalancersIDActionsDeleteServiceActionResponseActionStatusEnum string

const (
    PostLoadBalancersIDActionsDeleteServiceActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsDeleteServiceActionResponseActionStatusEnum = "success"
PostLoadBalancersIDActionsDeleteServiceActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsDeleteServiceActionResponseActionStatusEnum = "running"
PostLoadBalancersIDActionsDeleteServiceActionResponseActionStatusEnumError PostLoadBalancersIDActionsDeleteServiceActionResponseActionStatusEnum = "error"
)


type PostLoadBalancersIDActionsDeleteServiceActionResponseAction struct {
    Command string `json:"command"`
    Error PostLoadBalancersIDActionsDeleteServiceActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostLoadBalancersIDActionsDeleteServiceActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostLoadBalancersIDActionsDeleteServiceActionResponseActionStatusEnum `json:"status"`
    
}

type PostLoadBalancersIDActionsDeleteServiceActionResponse struct {
    Action PostLoadBalancersIDActionsDeleteServiceActionResponseAction `json:"action"`
    
}

type PostLoadBalancersIDActionsDeleteServiceResponse struct {
    ActionResponse *PostLoadBalancersIDActionsDeleteServiceActionResponse 
    ContentType string 
    StatusCode int64 
    
}

