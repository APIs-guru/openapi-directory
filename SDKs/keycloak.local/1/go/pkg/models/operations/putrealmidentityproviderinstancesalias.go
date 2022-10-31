package operations

import (
"openapi/pkg/models/shared")

type PutRealmIdentityProviderInstancesAliasPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmIdentityProviderInstancesAliasRequest struct {
    PathParams PutRealmIdentityProviderInstancesAliasPathParams 
    Request shared.IdentityProviderRepresentation `request:"mediaType=application/json"`
    
}

type PutRealmIdentityProviderInstancesAliasResponse struct {
    ContentType string 
    StatusCode int64 
    
}

