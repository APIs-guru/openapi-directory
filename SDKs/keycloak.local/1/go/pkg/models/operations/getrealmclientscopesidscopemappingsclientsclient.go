package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientScopesIDScopeMappingsClientsClientPathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientScopesIDScopeMappingsClientsClientRequest struct {
    PathParams GetRealmClientScopesIDScopeMappingsClientsClientPathParams 
    
}

type GetRealmClientScopesIDScopeMappingsClientsClientResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

