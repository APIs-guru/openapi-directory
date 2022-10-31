package operations



type GetRealmIdentityProviderInstancesAliasMapperTypesPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmIdentityProviderInstancesAliasMapperTypesRequest struct {
    PathParams GetRealmIdentityProviderInstancesAliasMapperTypesPathParams 
    
}

type GetRealmIdentityProviderInstancesAliasMapperTypesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

