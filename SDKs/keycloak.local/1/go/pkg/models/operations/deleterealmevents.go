package operations



type DeleteRealmEventsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmEventsRequest struct {
    PathParams DeleteRealmEventsPathParams 
    
}

type DeleteRealmEventsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

