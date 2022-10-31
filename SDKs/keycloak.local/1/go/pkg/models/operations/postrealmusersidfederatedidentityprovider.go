package operations

import (
"openapi/pkg/models/shared")

type PostRealmUsersIDFederatedIdentityProviderPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Provider string `pathParam:"style=simple,explode=false,name=provider"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmUsersIDFederatedIdentityProviderRequest struct {
    PathParams PostRealmUsersIDFederatedIdentityProviderPathParams 
    Request shared.FederatedIdentityRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmUsersIDFederatedIdentityProviderResponse struct {
    ContentType string 
    StatusCode int64 
    
}

