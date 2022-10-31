package operations



type PostLoadBalancersIDActionsDetachFromNetworkPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostLoadBalancersIDActionsDetachFromNetworkRequestBody struct {
    Network float64 `json:"network"`
    
}

type PostLoadBalancersIDActionsDetachFromNetworkRequest struct {
    PathParams PostLoadBalancersIDActionsDetachFromNetworkPathParams 
    Request *PostLoadBalancersIDActionsDetachFromNetworkRequestBody `request:"mediaType=application/json"`
    
}

type PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionStatusEnum string

const (
    PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionStatusEnum = "success"
PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionStatusEnum = "running"
PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionStatusEnumError PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionStatusEnum = "error"
)


type PostLoadBalancersIDActionsDetachFromNetworkActionResponseAction struct {
    Command string `json:"command"`
    Error PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostLoadBalancersIDActionsDetachFromNetworkActionResponseActionStatusEnum `json:"status"`
    
}

type PostLoadBalancersIDActionsDetachFromNetworkActionResponse struct {
    Action PostLoadBalancersIDActionsDetachFromNetworkActionResponseAction `json:"action"`
    
}

type PostLoadBalancersIDActionsDetachFromNetworkResponse struct {
    ActionResponse *PostLoadBalancersIDActionsDetachFromNetworkActionResponse 
    ContentType string 
    StatusCode int64 
    
}

