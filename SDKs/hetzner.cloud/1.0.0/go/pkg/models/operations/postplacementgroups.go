package operations




type PostPlacementGroupsCreatePlacementGroupRequestTypeEnum string

const (
    PostPlacementGroupsCreatePlacementGroupRequestTypeEnumSpread PostPlacementGroupsCreatePlacementGroupRequestTypeEnum = "spread"
)


type PostPlacementGroupsCreatePlacementGroupRequest struct {
    Labels map[string]interface{} `json:"labels,omitempty"`
    Name string `json:"name"`
    Type PostPlacementGroupsCreatePlacementGroupRequestTypeEnum `json:"type"`
    
}

type PostPlacementGroupsRequest struct {
    Request *PostPlacementGroupsCreatePlacementGroupRequest `request:"mediaType=application/json"`
    
}

type PostPlacementGroupsCreatePlacementGroupResponseNullableActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum string

const (
    PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnumSuccess PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum = "success"
PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnumRunning PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum = "running"
PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnumError PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum = "error"
)


type PostPlacementGroupsCreatePlacementGroupResponseNullableAction struct {
    Command string `json:"command"`
    Error PostPlacementGroupsCreatePlacementGroupResponseNullableActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum `json:"status"`
    
}


type PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum string

const (
    PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnumSpread PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum = "spread"
)


type PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup struct {
    Created string `json:"created"`
    ID int64 `json:"id"`
    Labels map[string]string `json:"labels"`
    Name string `json:"name"`
    Servers []int64 `json:"servers"`
    Type PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum `json:"type"`
    
}

type PostPlacementGroupsCreatePlacementGroupResponse struct {
    Action *PostPlacementGroupsCreatePlacementGroupResponseNullableAction `json:"action,omitempty"`
    PlacementGroup PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup `json:"placement_group"`
    
}

type PostPlacementGroupsResponse struct {
    ContentType string 
    CreatePlacementGroupResponse *PostPlacementGroupsCreatePlacementGroupResponse 
    StatusCode int64 
    
}

