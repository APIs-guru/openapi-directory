package operations



type DeleteRealmUsersIDGroupsGroupIDPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmUsersIDGroupsGroupIDRequest struct {
    PathParams DeleteRealmUsersIDGroupsGroupIDPathParams 
    
}

type DeleteRealmUsersIDGroupsGroupIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

