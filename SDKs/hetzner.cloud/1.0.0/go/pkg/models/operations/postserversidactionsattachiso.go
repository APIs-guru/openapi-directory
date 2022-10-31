package operations



type PostServersIDActionsAttachIsoPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsAttachIsoRequestBody struct {
    Iso string `json:"iso"`
    
}

type PostServersIDActionsAttachIsoRequest struct {
    PathParams PostServersIDActionsAttachIsoPathParams 
    Request *PostServersIDActionsAttachIsoRequestBody `request:"mediaType=application/json"`
    
}

type PostServersIDActionsAttachIsoActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsAttachIsoActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsAttachIsoActionResponseActionStatusEnum string

const (
    PostServersIDActionsAttachIsoActionResponseActionStatusEnumSuccess PostServersIDActionsAttachIsoActionResponseActionStatusEnum = "success"
PostServersIDActionsAttachIsoActionResponseActionStatusEnumRunning PostServersIDActionsAttachIsoActionResponseActionStatusEnum = "running"
PostServersIDActionsAttachIsoActionResponseActionStatusEnumError PostServersIDActionsAttachIsoActionResponseActionStatusEnum = "error"
)


type PostServersIDActionsAttachIsoActionResponseAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsAttachIsoActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsAttachIsoActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsAttachIsoActionResponseActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsAttachIsoActionResponse struct {
    Action PostServersIDActionsAttachIsoActionResponseAction `json:"action"`
    
}

type PostServersIDActionsAttachIsoResponse struct {
    ActionResponse *PostServersIDActionsAttachIsoActionResponse 
    ContentType string 
    StatusCode int64 
    
}

