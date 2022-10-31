package operations



type PostRealmClearKeysCachePathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClearKeysCacheRequest struct {
    PathParams PostRealmClearKeysCachePathParams 
    
}

type PostRealmClearKeysCacheResponse struct {
    ContentType string 
    StatusCode int64 
    
}

