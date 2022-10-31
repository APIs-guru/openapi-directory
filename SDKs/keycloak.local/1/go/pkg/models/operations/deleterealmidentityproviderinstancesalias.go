package operations



type DeleteRealmIdentityProviderInstancesAliasPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type DeleteRealmIdentityProviderInstancesAliasRequest struct {
    PathParams DeleteRealmIdentityProviderInstancesAliasPathParams 
    
}

type DeleteRealmIdentityProviderInstancesAliasResponse struct {
    ContentType string 
    StatusCode int64 
    
}

