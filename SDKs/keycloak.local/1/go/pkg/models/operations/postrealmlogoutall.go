package operations



type PostRealmLogoutAllPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmLogoutAllRequest struct {
    PathParams PostRealmLogoutAllPathParams 
    
}

type PostRealmLogoutAllResponse struct {
    ContentType string 
    StatusCode int64 
    
}

