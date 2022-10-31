package operations



type PutRealmUsersIDGroupsGroupIDPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmUsersIDGroupsGroupIDRequest struct {
    PathParams PutRealmUsersIDGroupsGroupIDPathParams 
    
}

type PutRealmUsersIDGroupsGroupIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

