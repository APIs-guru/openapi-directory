package operations

import (
"openapi/pkg/models/shared")

type GetRealmIdentityProviderInstancesAliasMappersIDPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmIdentityProviderInstancesAliasMappersIDRequest struct {
    PathParams GetRealmIdentityProviderInstancesAliasMappersIDPathParams 
    
}

type GetRealmIdentityProviderInstancesAliasMappersIDResponse struct {
    ContentType string 
    IdentityProviderMapperRepresentation *shared.IdentityProviderMapperRepresentation 
    StatusCode int64 
    
}

