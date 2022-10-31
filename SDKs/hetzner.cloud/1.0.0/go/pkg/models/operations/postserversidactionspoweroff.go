package operations



type PostServersIDActionsPoweroffPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsPoweroffRequest struct {
    PathParams PostServersIDActionsPoweroffPathParams 
    
}

type PostServersIDActionsPoweroffActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsPoweroffActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsPoweroffActionResponseActionStatusEnum string

const (
    PostServersIDActionsPoweroffActionResponseActionStatusEnumSuccess PostServersIDActionsPoweroffActionResponseActionStatusEnum = "success"
PostServersIDActionsPoweroffActionResponseActionStatusEnumRunning PostServersIDActionsPoweroffActionResponseActionStatusEnum = "running"
PostServersIDActionsPoweroffActionResponseActionStatusEnumError PostServersIDActionsPoweroffActionResponseActionStatusEnum = "error"
)


type PostServersIDActionsPoweroffActionResponseAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsPoweroffActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsPoweroffActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsPoweroffActionResponseActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsPoweroffActionResponse struct {
    Action PostServersIDActionsPoweroffActionResponseAction `json:"action"`
    
}

type PostServersIDActionsPoweroffResponse struct {
    ActionResponse *PostServersIDActionsPoweroffActionResponse 
    ContentType string 
    StatusCode int64 
    
}

