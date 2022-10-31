package operations



type PostLoadBalancersIDActionsChangeAlgorithmPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}


type PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnum string

const (
    PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnumRoundRobin PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnum = "round_robin"
PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnumLeastConnections PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnum = "least_connections"
)


type PostLoadBalancersIDActionsChangeAlgorithmRequestBody struct {
    Type PostLoadBalancersIDActionsChangeAlgorithmRequestBodyTypeEnum `json:"type"`
    
}

type PostLoadBalancersIDActionsChangeAlgorithmRequest struct {
    PathParams PostLoadBalancersIDActionsChangeAlgorithmPathParams 
    Request *PostLoadBalancersIDActionsChangeAlgorithmRequestBody `request:"mediaType=application/json"`
    
}

type PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionStatusEnum string

const (
    PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionStatusEnumSuccess PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionStatusEnum = "success"
PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionStatusEnumRunning PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionStatusEnum = "running"
PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionStatusEnumError PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionStatusEnum = "error"
)


type PostLoadBalancersIDActionsChangeAlgorithmActionResponseAction struct {
    Command string `json:"command"`
    Error PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostLoadBalancersIDActionsChangeAlgorithmActionResponseActionStatusEnum `json:"status"`
    
}

type PostLoadBalancersIDActionsChangeAlgorithmActionResponse struct {
    Action PostLoadBalancersIDActionsChangeAlgorithmActionResponseAction `json:"action"`
    
}

type PostLoadBalancersIDActionsChangeAlgorithmResponse struct {
    ActionResponse *PostLoadBalancersIDActionsChangeAlgorithmActionResponse 
    ContentType string 
    StatusCode int64 
    
}

