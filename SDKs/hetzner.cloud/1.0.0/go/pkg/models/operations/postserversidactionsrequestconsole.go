package operations



type PostServersIDActionsRequestConsolePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsRequestConsoleRequest struct {
    PathParams PostServersIDActionsRequestConsolePathParams 
    
}

type PostServersIDActionsRequestConsole201ApplicationJSONActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsRequestConsole201ApplicationJSONActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum string

const (
    PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum = "success"
PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnumRunning PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum = "running"
PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnumError PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum = "error"
)


type PostServersIDActionsRequestConsole201ApplicationJSONAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsRequestConsole201ApplicationJSONActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsRequestConsole201ApplicationJSONActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsRequestConsole201ApplicationJSONActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsRequestConsole201ApplicationJSON struct {
    Action PostServersIDActionsRequestConsole201ApplicationJSONAction `json:"action"`
    Password string `json:"password"`
    WssURL string `json:"wss_url"`
    
}

type PostServersIDActionsRequestConsoleResponse struct {
    ContentType string 
    PostServersIDActionsRequestConsole201ApplicationJSONObject *PostServersIDActionsRequestConsole201ApplicationJSON 
    StatusCode int64 
    
}

