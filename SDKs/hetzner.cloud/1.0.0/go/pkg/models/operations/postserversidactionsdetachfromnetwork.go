package operations



type PostServersIDActionsDetachFromNetworkPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsDetachFromNetworkDetachFromNetworkRequest struct {
    Network int64 `json:"network"`
    
}

type PostServersIDActionsDetachFromNetworkRequest struct {
    PathParams PostServersIDActionsDetachFromNetworkPathParams 
    Request *PostServersIDActionsDetachFromNetworkDetachFromNetworkRequest `request:"mediaType=application/json"`
    
}

type PostServersIDActionsDetachFromNetworkActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsDetachFromNetworkActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsDetachFromNetworkActionResponseActionStatusEnum string

const (
    PostServersIDActionsDetachFromNetworkActionResponseActionStatusEnumSuccess PostServersIDActionsDetachFromNetworkActionResponseActionStatusEnum = "success"
PostServersIDActionsDetachFromNetworkActionResponseActionStatusEnumRunning PostServersIDActionsDetachFromNetworkActionResponseActionStatusEnum = "running"
PostServersIDActionsDetachFromNetworkActionResponseActionStatusEnumError PostServersIDActionsDetachFromNetworkActionResponseActionStatusEnum = "error"
)


type PostServersIDActionsDetachFromNetworkActionResponseAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsDetachFromNetworkActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsDetachFromNetworkActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsDetachFromNetworkActionResponseActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsDetachFromNetworkActionResponse struct {
    Action PostServersIDActionsDetachFromNetworkActionResponseAction `json:"action"`
    
}

type PostServersIDActionsDetachFromNetworkResponse struct {
    ActionResponse *PostServersIDActionsDetachFromNetworkActionResponse 
    ContentType string 
    StatusCode int64 
    
}

