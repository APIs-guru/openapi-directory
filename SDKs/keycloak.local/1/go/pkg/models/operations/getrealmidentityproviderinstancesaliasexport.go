package operations



type GetRealmIdentityProviderInstancesAliasExportPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmIdentityProviderInstancesAliasExportQueryParams struct {
    Format *string `queryParam:"style=form,explode=true,name=format"`
    
}

type GetRealmIdentityProviderInstancesAliasExportRequest struct {
    PathParams GetRealmIdentityProviderInstancesAliasExportPathParams 
    QueryParams GetRealmIdentityProviderInstancesAliasExportQueryParams 
    
}

type GetRealmIdentityProviderInstancesAliasExportResponse struct {
    ContentType string 
    StatusCode int64 
    
}

