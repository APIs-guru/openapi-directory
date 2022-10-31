package operations



type GetRealmIdentityProviderProvidersProviderIDPathParams struct {
    ProviderID string `pathParam:"style=simple,explode=false,name=provider_id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmIdentityProviderProvidersProviderIDRequest struct {
    PathParams GetRealmIdentityProviderProvidersProviderIDPathParams 
    
}

type GetRealmIdentityProviderProvidersProviderIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

