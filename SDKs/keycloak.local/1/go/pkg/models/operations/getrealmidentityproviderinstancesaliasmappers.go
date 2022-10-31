package operations

import (
"openapi/pkg/models/shared")

type GetRealmIdentityProviderInstancesAliasMappersPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmIdentityProviderInstancesAliasMappersRequest struct {
    PathParams GetRealmIdentityProviderInstancesAliasMappersPathParams 
    
}

type GetRealmIdentityProviderInstancesAliasMappersResponse struct {
    ContentType string 
    IdentityProviderMapperRepresentations []shared.IdentityProviderMapperRepresentation 
    StatusCode int64 
    
}

