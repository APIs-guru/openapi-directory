package operations



type PostServersIDActionsRebuildPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsRebuildRebuildServerRequest struct {
    Image string `json:"image"`
    
}

type PostServersIDActionsRebuildRequest struct {
    PathParams PostServersIDActionsRebuildPathParams 
    Request *PostServersIDActionsRebuildRebuildServerRequest `request:"mediaType=application/json"`
    
}

type PostServersIDActionsRebuild201ApplicationJSONActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsRebuild201ApplicationJSONActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsRebuild201ApplicationJSONActionStatusEnum string

const (
    PostServersIDActionsRebuild201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsRebuild201ApplicationJSONActionStatusEnum = "success"
PostServersIDActionsRebuild201ApplicationJSONActionStatusEnumRunning PostServersIDActionsRebuild201ApplicationJSONActionStatusEnum = "running"
PostServersIDActionsRebuild201ApplicationJSONActionStatusEnumError PostServersIDActionsRebuild201ApplicationJSONActionStatusEnum = "error"
)


type PostServersIDActionsRebuild201ApplicationJSONAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsRebuild201ApplicationJSONActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsRebuild201ApplicationJSONActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsRebuild201ApplicationJSONActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsRebuild201ApplicationJSON struct {
    Action *PostServersIDActionsRebuild201ApplicationJSONAction `json:"action,omitempty"`
    RootPassword *string `json:"root_password,omitempty"`
    
}

type PostServersIDActionsRebuildResponse struct {
    ContentType string 
    PostServersIDActionsRebuild201ApplicationJSONObject *PostServersIDActionsRebuild201ApplicationJSON 
    StatusCode int64 
    
}

