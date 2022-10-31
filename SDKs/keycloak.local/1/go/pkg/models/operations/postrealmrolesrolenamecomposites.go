package operations

import (
"openapi/pkg/models/shared")

type PostRealmRolesRoleNameCompositesPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type PostRealmRolesRoleNameCompositesRequest struct {
    PathParams PostRealmRolesRoleNameCompositesPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmRolesRoleNameCompositesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

