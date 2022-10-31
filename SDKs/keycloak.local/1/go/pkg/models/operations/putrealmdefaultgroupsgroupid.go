package operations



type PutRealmDefaultGroupsGroupIDPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmDefaultGroupsGroupIDRequest struct {
    PathParams PutRealmDefaultGroupsGroupIDPathParams 
    
}

type PutRealmDefaultGroupsGroupIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

