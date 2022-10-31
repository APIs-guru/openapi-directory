package operations



type GetFloatingIpsIDActionsActionIDPathParams struct {
    ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetFloatingIpsIDActionsActionIDRequest struct {
    PathParams GetFloatingIpsIDActionsActionIDPathParams 
    
}

type GetFloatingIpsIDActionsActionIDActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type GetFloatingIpsIDActionsActionIDActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type GetFloatingIpsIDActionsActionIDActionResponseActionStatusEnum string

const (
    GetFloatingIpsIDActionsActionIDActionResponseActionStatusEnumSuccess GetFloatingIpsIDActionsActionIDActionResponseActionStatusEnum = "success"
GetFloatingIpsIDActionsActionIDActionResponseActionStatusEnumRunning GetFloatingIpsIDActionsActionIDActionResponseActionStatusEnum = "running"
GetFloatingIpsIDActionsActionIDActionResponseActionStatusEnumError GetFloatingIpsIDActionsActionIDActionResponseActionStatusEnum = "error"
)


type GetFloatingIpsIDActionsActionIDActionResponseAction struct {
    Command string `json:"command"`
    Error GetFloatingIpsIDActionsActionIDActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []GetFloatingIpsIDActionsActionIDActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status GetFloatingIpsIDActionsActionIDActionResponseActionStatusEnum `json:"status"`
    
}

type GetFloatingIpsIDActionsActionIDActionResponse struct {
    Action GetFloatingIpsIDActionsActionIDActionResponseAction `json:"action"`
    
}

type GetFloatingIpsIDActionsActionIDResponse struct {
    ActionResponse *GetFloatingIpsIDActionsActionIDActionResponse 
    ContentType string 
    StatusCode int64 
    
}

