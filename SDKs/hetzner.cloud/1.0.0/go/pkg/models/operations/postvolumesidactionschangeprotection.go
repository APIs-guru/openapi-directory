package operations



type PostVolumesIDActionsChangeProtectionPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostVolumesIDActionsChangeProtectionRequestBody struct {
    Delete *bool `json:"delete,omitempty"`
    
}

type PostVolumesIDActionsChangeProtectionRequest struct {
    PathParams PostVolumesIDActionsChangeProtectionPathParams 
    Request *PostVolumesIDActionsChangeProtectionRequestBody `request:"mediaType=application/json"`
    
}

type PostVolumesIDActionsChangeProtectionActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostVolumesIDActionsChangeProtectionActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostVolumesIDActionsChangeProtectionActionResponseActionStatusEnum string

const (
    PostVolumesIDActionsChangeProtectionActionResponseActionStatusEnumSuccess PostVolumesIDActionsChangeProtectionActionResponseActionStatusEnum = "success"
PostVolumesIDActionsChangeProtectionActionResponseActionStatusEnumRunning PostVolumesIDActionsChangeProtectionActionResponseActionStatusEnum = "running"
PostVolumesIDActionsChangeProtectionActionResponseActionStatusEnumError PostVolumesIDActionsChangeProtectionActionResponseActionStatusEnum = "error"
)


type PostVolumesIDActionsChangeProtectionActionResponseAction struct {
    Command string `json:"command"`
    Error PostVolumesIDActionsChangeProtectionActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostVolumesIDActionsChangeProtectionActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostVolumesIDActionsChangeProtectionActionResponseActionStatusEnum `json:"status"`
    
}

type PostVolumesIDActionsChangeProtectionActionResponse struct {
    Action PostVolumesIDActionsChangeProtectionActionResponseAction `json:"action"`
    
}

type PostVolumesIDActionsChangeProtectionResponse struct {
    ActionResponse *PostVolumesIDActionsChangeProtectionActionResponse 
    ContentType string 
    StatusCode int64 
    
}

