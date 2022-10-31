package operations



type PostRealmUserStorageIDUnlinkUsersPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmUserStorageIDUnlinkUsersRequest struct {
    PathParams PostRealmUserStorageIDUnlinkUsersPathParams 
    
}

type PostRealmUserStorageIDUnlinkUsersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

