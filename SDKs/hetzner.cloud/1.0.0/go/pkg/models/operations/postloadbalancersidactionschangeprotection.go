package operations



type PostLoadBalancersIDActionsChangeProtectionPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostLoadBalancersIDActionsChangeProtectionRequestBody struct {
    Delete *bool `json:"delete,omitempty"`
    
}

type PostLoadBalancersIDActionsChangeProtectionRequest struct {
    PathParams PostLoadBalancersIDActionsChangeProtectionPathParams 
    Request *PostLoadBalancersIDActionsChangeProtectionRequestBody `request:"mediaType=application/json"`
    
}

type PostLoadBalancersIDActionsChangeProtectionActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostLoadBalancersIDActionsChangeProtectionActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostLoadBalancersIDActionsChangeProtectionActionResponseActionStatusEnum string

const (
    PostLoadBalancersIDActionsChangeProtectionActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsChangeProtectionActionResponseActionStatusEnum = "success"
PostLoadBalancersIDActionsChangeProtectionActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsChangeProtectionActionResponseActionStatusEnum = "running"
PostLoadBalancersIDActionsChangeProtectionActionResponseActionStatusEnumError PostLoadBalancersIDActionsChangeProtectionActionResponseActionStatusEnum = "error"
)


type PostLoadBalancersIDActionsChangeProtectionActionResponseAction struct {
    Command string `json:"command"`
    Error PostLoadBalancersIDActionsChangeProtectionActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostLoadBalancersIDActionsChangeProtectionActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostLoadBalancersIDActionsChangeProtectionActionResponseActionStatusEnum `json:"status"`
    
}

type PostLoadBalancersIDActionsChangeProtectionActionResponse struct {
    Action PostLoadBalancersIDActionsChangeProtectionActionResponseAction `json:"action"`
    
}

type PostLoadBalancersIDActionsChangeProtectionResponse struct {
    ActionResponse *PostLoadBalancersIDActionsChangeProtectionActionResponse 
    ContentType string 
    StatusCode int64 
    
}

