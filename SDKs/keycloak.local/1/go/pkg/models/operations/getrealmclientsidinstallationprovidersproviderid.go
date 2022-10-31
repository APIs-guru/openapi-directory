package operations



type GetRealmClientsIDInstallationProvidersProviderIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    ProviderID string `pathParam:"style=simple,explode=false,name=providerId"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsIDInstallationProvidersProviderIDRequest struct {
    PathParams GetRealmClientsIDInstallationProvidersProviderIDPathParams 
    
}

type GetRealmClientsIDInstallationProvidersProviderIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

