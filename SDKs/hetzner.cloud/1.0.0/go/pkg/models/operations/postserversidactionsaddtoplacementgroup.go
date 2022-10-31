package operations



type PostServersIDActionsAddToPlacementGroupPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsAddToPlacementGroupAddToPlacementGroupRequest struct {
    PlacementGroup int64 `json:"placement_group"`
    
}

type PostServersIDActionsAddToPlacementGroupRequest struct {
    PathParams PostServersIDActionsAddToPlacementGroupPathParams 
    Request *PostServersIDActionsAddToPlacementGroupAddToPlacementGroupRequest `request:"mediaType=application/json"`
    
}

type PostServersIDActionsAddToPlacementGroupActionResponseActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsAddToPlacementGroupActionResponseActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsAddToPlacementGroupActionResponseActionStatusEnum string

const (
    PostServersIDActionsAddToPlacementGroupActionResponseActionStatusEnumSuccess PostServersIDActionsAddToPlacementGroupActionResponseActionStatusEnum = "success"
PostServersIDActionsAddToPlacementGroupActionResponseActionStatusEnumRunning PostServersIDActionsAddToPlacementGroupActionResponseActionStatusEnum = "running"
PostServersIDActionsAddToPlacementGroupActionResponseActionStatusEnumError PostServersIDActionsAddToPlacementGroupActionResponseActionStatusEnum = "error"
)


type PostServersIDActionsAddToPlacementGroupActionResponseAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsAddToPlacementGroupActionResponseActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsAddToPlacementGroupActionResponseActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsAddToPlacementGroupActionResponseActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsAddToPlacementGroupActionResponse struct {
    Action PostServersIDActionsAddToPlacementGroupActionResponseAction `json:"action"`
    
}

type PostServersIDActionsAddToPlacementGroupResponse struct {
    ActionResponse *PostServersIDActionsAddToPlacementGroupActionResponse 
    ContentType string 
    StatusCode int64 
    
}

