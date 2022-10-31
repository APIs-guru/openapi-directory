package operations



type DeleteRealmGroupsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmGroupsIDRequest struct {
    PathParams DeleteRealmGroupsIDPathParams 
    
}

type DeleteRealmGroupsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

