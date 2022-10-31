package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDRolesRoleNameCompositesClientsClientPathParams struct {
    Client string `pathParam:"style=simple,explode=false,name=client"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type GetRealmClientsIDRolesRoleNameCompositesClientsClientRequest struct {
    PathParams GetRealmClientsIDRolesRoleNameCompositesClientsClientPathParams 
    
}

type GetRealmClientsIDRolesRoleNameCompositesClientsClientResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

