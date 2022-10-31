package operations



type PostRealmAuthenticationRegisterRequiredActionPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmAuthenticationRegisterRequiredActionRequest struct {
    PathParams PostRealmAuthenticationRegisterRequiredActionPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type PostRealmAuthenticationRegisterRequiredActionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

