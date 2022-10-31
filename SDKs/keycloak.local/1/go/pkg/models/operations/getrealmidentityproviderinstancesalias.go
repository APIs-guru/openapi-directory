package operations

import (
"openapi/pkg/models/shared")

type GetRealmIdentityProviderInstancesAliasPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmIdentityProviderInstancesAliasRequest struct {
    PathParams GetRealmIdentityProviderInstancesAliasPathParams 
    
}

type GetRealmIdentityProviderInstancesAliasResponse struct {
    ContentType string 
    IdentityProviderRepresentation *shared.IdentityProviderRepresentation 
    StatusCode int64 
    
}

