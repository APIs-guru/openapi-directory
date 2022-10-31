package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientScopesIDScopeMappingsRealmPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientScopesIDScopeMappingsRealmRequest struct {
    PathParams GetRealmClientScopesIDScopeMappingsRealmPathParams 
    
}

type GetRealmClientScopesIDScopeMappingsRealmResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

