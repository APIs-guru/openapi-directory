package operations



type PostRealmIdentityProviderImportConfigPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmIdentityProviderImportConfigRequest struct {
    PathParams PostRealmIdentityProviderImportConfigPathParams 
    
}

type PostRealmIdentityProviderImportConfigResponse struct {
    ContentType string 
    PostRealmIdentityProviderImportConfig2XxApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

