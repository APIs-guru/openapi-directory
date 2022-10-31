package operations



type PostNetworksIDActionsChangeProtectionPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostNetworksIDActionsChangeProtectionChangeProtectionRequest struct {
    Delete *bool `json:"delete,omitempty"`
    
}

type PostNetworksIDActionsChangeProtectionRequest struct {
    PathParams PostNetworksIDActionsChangeProtectionPathParams 
    Request *PostNetworksIDActionsChangeProtectionChangeProtectionRequest `request:"mediaType=application/json"`
    
}

type PostNetworksIDActionsChangeProtectionActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostNetworksIDActionsChangeProtectionActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostNetworksIDActionsChangeProtectionActionResponseActionStatusEnum string

const (
    PostNetworksIDActionsChangeProtectionActionResponseActionStatusEnumSuccess PostNetworksIDActionsChangeProtectionActionResponseActionStatusEnum = "success"
PostNetworksIDActionsChangeProtectionActionResponseActionStatusEnumRunning PostNetworksIDActionsChangeProtectionActionResponseActionStatusEnum = "running"
PostNetworksIDActionsChangeProtectionActionResponseActionStatusEnumError PostNetworksIDActionsChangeProtectionActionResponseActionStatusEnum = "error"
)


type PostNetworksIDActionsChangeProtectionActionResponseAction struct {
    Command string `json:"command"`
    Error PostNetworksIDActionsChangeProtectionActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostNetworksIDActionsChangeProtectionActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostNetworksIDActionsChangeProtectionActionResponseActionStatusEnum `json:"status"`
    
}

type PostNetworksIDActionsChangeProtectionActionResponse struct {
    Action PostNetworksIDActionsChangeProtectionActionResponseAction `json:"action"`
    
}

type PostNetworksIDActionsChangeProtectionResponse struct {
    ActionResponse *PostNetworksIDActionsChangeProtectionActionResponse 
    ContentType string 
    StatusCode int64 
    
}

