package operations



type GetRealmAuthenticationPerClientConfigDescriptionPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmAuthenticationPerClientConfigDescriptionRequest struct {
    PathParams GetRealmAuthenticationPerClientConfigDescriptionPathParams 
    
}

type GetRealmAuthenticationPerClientConfigDescriptionResponse struct {
    ContentType string 
    GetRealmAuthenticationPerClientConfigDescription2XxApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

