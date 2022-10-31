package operations



type GetLoadBalancersIDActionsActionIDPathParams struct {
    ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetLoadBalancersIDActionsActionIDRequest struct {
    PathParams GetLoadBalancersIDActionsActionIDPathParams 
    
}

type GetLoadBalancersIDActionsActionIDActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type GetLoadBalancersIDActionsActionIDActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type GetLoadBalancersIDActionsActionIDActionResponseActionStatusEnum string

const (
    GetLoadBalancersIDActionsActionIDActionResponseActionStatusEnumSuccess GetLoadBalancersIDActionsActionIDActionResponseActionStatusEnum = "success"
GetLoadBalancersIDActionsActionIDActionResponseActionStatusEnumRunning GetLoadBalancersIDActionsActionIDActionResponseActionStatusEnum = "running"
GetLoadBalancersIDActionsActionIDActionResponseActionStatusEnumError GetLoadBalancersIDActionsActionIDActionResponseActionStatusEnum = "error"
)


type GetLoadBalancersIDActionsActionIDActionResponseAction struct {
    Command string `json:"command"`
    Error GetLoadBalancersIDActionsActionIDActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []GetLoadBalancersIDActionsActionIDActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status GetLoadBalancersIDActionsActionIDActionResponseActionStatusEnum `json:"status"`
    
}

type GetLoadBalancersIDActionsActionIDActionResponse struct {
    Action GetLoadBalancersIDActionsActionIDActionResponseAction `json:"action"`
    
}

type GetLoadBalancersIDActionsActionIDResponse struct {
    ActionResponse *GetLoadBalancersIDActionsActionIDActionResponse 
    ContentType string 
    StatusCode int64 
    
}

