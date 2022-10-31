package operations



type PostLoadBalancersIDActionsRemoveTargetPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestIP struct {
    IP string `json:"ip"`
    
}

type PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestLabelSelector struct {
    Selector string `json:"selector"`
    
}

type PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestServer struct {
    ID float64 `json:"id"`
    
}


type PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnum string

const (
    PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnumServer PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnum = "server"
PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnumLabelSelector PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnum = "label_selector"
PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnumIP PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnum = "ip"
)


type PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequest struct {
    IP *PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestIP `json:"ip,omitempty"`
    LabelSelector *PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestLabelSelector `json:"label_selector,omitempty"`
    Server *PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestServer `json:"server,omitempty"`
    Type PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequestTypeEnum `json:"type"`
    
}

type PostLoadBalancersIDActionsRemoveTargetRequest struct {
    PathParams PostLoadBalancersIDActionsRemoveTargetPathParams 
    Request *PostLoadBalancersIDActionsRemoveTargetRemoveTargetRequest `request:"mediaType=application/json"`
    
}

type PostLoadBalancersIDActionsRemoveTargetActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostLoadBalancersIDActionsRemoveTargetActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnum string

const (
    PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnum = "success"
PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnum = "running"
PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnumError PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnum = "error"
)


type PostLoadBalancersIDActionsRemoveTargetActionResponseAction struct {
    Command string `json:"command"`
    Error PostLoadBalancersIDActionsRemoveTargetActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostLoadBalancersIDActionsRemoveTargetActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostLoadBalancersIDActionsRemoveTargetActionResponseActionStatusEnum `json:"status"`
    
}

type PostLoadBalancersIDActionsRemoveTargetActionResponse struct {
    Action PostLoadBalancersIDActionsRemoveTargetActionResponseAction `json:"action"`
    
}

type PostLoadBalancersIDActionsRemoveTargetResponse struct {
    ActionResponse *PostLoadBalancersIDActionsRemoveTargetActionResponse 
    ContentType string 
    StatusCode int64 
    
}

