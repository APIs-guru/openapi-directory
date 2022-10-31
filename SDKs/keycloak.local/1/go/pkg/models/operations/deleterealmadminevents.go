package operations



type DeleteRealmAdminEventsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmAdminEventsRequest struct {
    PathParams DeleteRealmAdminEventsPathParams 
    
}

type DeleteRealmAdminEventsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

