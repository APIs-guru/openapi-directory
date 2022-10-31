package operations



type PostServersIDActionsChangeAliasIpsPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsChangeAliasIpsRequestBody struct {
    AliasIps []string `json:"alias_ips"`
    Network int64 `json:"network"`
    
}

type PostServersIDActionsChangeAliasIpsRequest struct {
    PathParams PostServersIDActionsChangeAliasIpsPathParams 
    Request *PostServersIDActionsChangeAliasIpsRequestBody `request:"mediaType=application/json"`
    
}

type PostServersIDActionsChangeAliasIpsActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsChangeAliasIpsActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsChangeAliasIpsActionResponseActionStatusEnum string

const (
    PostServersIDActionsChangeAliasIpsActionResponseActionStatusEnumSuccess PostServersIDActionsChangeAliasIpsActionResponseActionStatusEnum = "success"
PostServersIDActionsChangeAliasIpsActionResponseActionStatusEnumRunning PostServersIDActionsChangeAliasIpsActionResponseActionStatusEnum = "running"
PostServersIDActionsChangeAliasIpsActionResponseActionStatusEnumError PostServersIDActionsChangeAliasIpsActionResponseActionStatusEnum = "error"
)


type PostServersIDActionsChangeAliasIpsActionResponseAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsChangeAliasIpsActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsChangeAliasIpsActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsChangeAliasIpsActionResponseActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsChangeAliasIpsActionResponse struct {
    Action PostServersIDActionsChangeAliasIpsActionResponseAction `json:"action"`
    
}

type PostServersIDActionsChangeAliasIpsResponse struct {
    ActionResponse *PostServersIDActionsChangeAliasIpsActionResponse 
    ContentType string 
    StatusCode int64 
    
}

