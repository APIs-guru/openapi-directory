package operations

import (
"openapi/pkg/models/shared")

type GetRealmRolesRoleNameCompositesRealmPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type GetRealmRolesRoleNameCompositesRealmRequest struct {
    PathParams GetRealmRolesRoleNameCompositesRealmPathParams 
    
}

type GetRealmRolesRoleNameCompositesRealmResponse struct {
    ContentType string 
    RoleRepresentations []shared.RoleRepresentation 
    StatusCode int64 
    
}

