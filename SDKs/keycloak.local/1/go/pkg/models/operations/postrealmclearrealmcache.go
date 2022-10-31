package operations



type PostRealmClearRealmCachePathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClearRealmCacheRequest struct {
    PathParams PostRealmClearRealmCachePathParams 
    
}

type PostRealmClearRealmCacheResponse struct {
    ContentType string 
    StatusCode int64 
    
}

