package operations



type DeleteRealmIdentityProviderInstancesAliasMappersIDPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmIdentityProviderInstancesAliasMappersIDRequest struct {
    PathParams DeleteRealmIdentityProviderInstancesAliasMappersIDPathParams 
    
}

type DeleteRealmIdentityProviderInstancesAliasMappersIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

