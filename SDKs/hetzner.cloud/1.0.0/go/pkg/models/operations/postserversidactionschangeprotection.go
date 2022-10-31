package operations



type PostServersIDActionsChangeProtectionPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsChangeProtectionRequestBody struct {
    Delete *bool `json:"delete,omitempty"`
    Rebuild *bool `json:"rebuild,omitempty"`
    
}

type PostServersIDActionsChangeProtectionRequest struct {
    PathParams PostServersIDActionsChangeProtectionPathParams 
    Request *PostServersIDActionsChangeProtectionRequestBody `request:"mediaType=application/json"`
    
}

type PostServersIDActionsChangeProtectionActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsChangeProtectionActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsChangeProtectionActionResponseActionStatusEnum string

const (
    PostServersIDActionsChangeProtectionActionResponseActionStatusEnumSuccess PostServersIDActionsChangeProtectionActionResponseActionStatusEnum = "success"
PostServersIDActionsChangeProtectionActionResponseActionStatusEnumRunning PostServersIDActionsChangeProtectionActionResponseActionStatusEnum = "running"
PostServersIDActionsChangeProtectionActionResponseActionStatusEnumError PostServersIDActionsChangeProtectionActionResponseActionStatusEnum = "error"
)


type PostServersIDActionsChangeProtectionActionResponseAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsChangeProtectionActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsChangeProtectionActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsChangeProtectionActionResponseActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsChangeProtectionActionResponse struct {
    Action PostServersIDActionsChangeProtectionActionResponseAction `json:"action"`
    
}

type PostServersIDActionsChangeProtectionResponse struct {
    ActionResponse *PostServersIDActionsChangeProtectionActionResponse 
    ContentType string 
    StatusCode int64 
    
}

