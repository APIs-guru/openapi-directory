package operations

import (
"openapi/pkg/models/shared")

type PostRealmIdentityProviderInstancesAliasMappersPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmIdentityProviderInstancesAliasMappersRequest struct {
    PathParams PostRealmIdentityProviderInstancesAliasMappersPathParams 
    Request shared.IdentityProviderMapperRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmIdentityProviderInstancesAliasMappersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

