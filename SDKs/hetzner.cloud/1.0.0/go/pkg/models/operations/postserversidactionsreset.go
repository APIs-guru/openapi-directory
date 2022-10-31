package operations



type PostServersIDActionsResetPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsResetRequest struct {
    PathParams PostServersIDActionsResetPathParams 
    
}

type PostServersIDActionsResetActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsResetActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsResetActionResponseActionStatusEnum string

const (
    PostServersIDActionsResetActionResponseActionStatusEnumSuccess PostServersIDActionsResetActionResponseActionStatusEnum = "success"
PostServersIDActionsResetActionResponseActionStatusEnumRunning PostServersIDActionsResetActionResponseActionStatusEnum = "running"
PostServersIDActionsResetActionResponseActionStatusEnumError PostServersIDActionsResetActionResponseActionStatusEnum = "error"
)


type PostServersIDActionsResetActionResponseAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsResetActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsResetActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsResetActionResponseActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsResetActionResponse struct {
    Action PostServersIDActionsResetActionResponseAction `json:"action"`
    
}

type PostServersIDActionsResetResponse struct {
    ActionResponse *PostServersIDActionsResetActionResponse 
    ContentType string 
    StatusCode int64 
    
}

