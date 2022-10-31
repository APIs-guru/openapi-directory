package operations



type GetNetworksIDActionsActionIDPathParams struct {
    ActionID int64 `pathParam:"style=simple,explode=false,name=action_id"`
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetNetworksIDActionsActionIDRequest struct {
    PathParams GetNetworksIDActionsActionIDPathParams 
    
}

type GetNetworksIDActionsActionIDActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type GetNetworksIDActionsActionIDActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type GetNetworksIDActionsActionIDActionResponseActionStatusEnum string

const (
    GetNetworksIDActionsActionIDActionResponseActionStatusEnumSuccess GetNetworksIDActionsActionIDActionResponseActionStatusEnum = "success"
GetNetworksIDActionsActionIDActionResponseActionStatusEnumRunning GetNetworksIDActionsActionIDActionResponseActionStatusEnum = "running"
GetNetworksIDActionsActionIDActionResponseActionStatusEnumError GetNetworksIDActionsActionIDActionResponseActionStatusEnum = "error"
)


type GetNetworksIDActionsActionIDActionResponseAction struct {
    Command string `json:"command"`
    Error GetNetworksIDActionsActionIDActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []GetNetworksIDActionsActionIDActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status GetNetworksIDActionsActionIDActionResponseActionStatusEnum `json:"status"`
    
}

type GetNetworksIDActionsActionIDActionResponse struct {
    Action GetNetworksIDActionsActionIDActionResponseAction `json:"action"`
    
}

type GetNetworksIDActionsActionIDResponse struct {
    ActionResponse *GetNetworksIDActionsActionIDActionResponse 
    ContentType string 
    StatusCode int64 
    
}

