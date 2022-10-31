package operations



type DeleteRealmPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmRequest struct {
    PathParams DeleteRealmPathParams 
    
}

type DeleteRealmResponse struct {
    ContentType string 
    StatusCode int64 
    
}

