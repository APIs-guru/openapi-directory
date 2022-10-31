package operations



type PostLoadBalancersIDActionsChangeTypePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostLoadBalancersIDActionsChangeTypeChangeTypeRequest struct {
    LoadBalancerType string `json:"load_balancer_type"`
    
}

type PostLoadBalancersIDActionsChangeTypeRequest struct {
    PathParams PostLoadBalancersIDActionsChangeTypePathParams 
    Request *PostLoadBalancersIDActionsChangeTypeChangeTypeRequest `request:"mediaType=application/json"`
    
}

type PostLoadBalancersIDActionsChangeTypeActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostLoadBalancersIDActionsChangeTypeActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostLoadBalancersIDActionsChangeTypeActionResponseActionStatusEnum string

const (
    PostLoadBalancersIDActionsChangeTypeActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsChangeTypeActionResponseActionStatusEnum = "success"
PostLoadBalancersIDActionsChangeTypeActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsChangeTypeActionResponseActionStatusEnum = "running"
PostLoadBalancersIDActionsChangeTypeActionResponseActionStatusEnumError PostLoadBalancersIDActionsChangeTypeActionResponseActionStatusEnum = "error"
)


type PostLoadBalancersIDActionsChangeTypeActionResponseAction struct {
    Command string `json:"command"`
    Error PostLoadBalancersIDActionsChangeTypeActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostLoadBalancersIDActionsChangeTypeActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostLoadBalancersIDActionsChangeTypeActionResponseActionStatusEnum `json:"status"`
    
}

type PostLoadBalancersIDActionsChangeTypeActionResponse struct {
    Action PostLoadBalancersIDActionsChangeTypeActionResponseAction `json:"action"`
    
}

type PostLoadBalancersIDActionsChangeTypeResponse struct {
    ActionResponse *PostLoadBalancersIDActionsChangeTypeActionResponse 
    ContentType string 
    StatusCode int64 
    
}

