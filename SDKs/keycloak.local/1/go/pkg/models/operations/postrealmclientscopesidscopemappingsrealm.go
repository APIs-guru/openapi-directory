package operations

import (
"openapi/pkg/models/shared")

type PostRealmClientScopesIDScopeMappingsRealmPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClientScopesIDScopeMappingsRealmRequest struct {
    PathParams PostRealmClientScopesIDScopeMappingsRealmPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmClientScopesIDScopeMappingsRealmResponse struct {
    ContentType string 
    StatusCode int64 
    
}

