package operations



type GetRealmAuthenticationFormActionProvidersPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmAuthenticationFormActionProvidersRequest struct {
    PathParams GetRealmAuthenticationFormActionProvidersPathParams 
    
}

type GetRealmAuthenticationFormActionProvidersResponse struct {
    ContentType string 
    GetRealmAuthenticationFormActionProviders2XxApplicationJSONObjects []map[string]interface{} 
    StatusCode int64 
    
}

