package operations

import (
"openapi/pkg/models/shared")

type GetRealmRolesRoleNamePathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type GetRealmRolesRoleNameRequest struct {
    PathParams GetRealmRolesRoleNamePathParams 
    
}

type GetRealmRolesRoleNameResponse struct {
    ContentType string 
    RoleRepresentation *shared.RoleRepresentation 
    StatusCode int64 
    
}

