package operations

import (
"openapi/pkg/models/shared")

type PostRealmClientsIDRolesRoleNameCompositesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type PostRealmClientsIDRolesRoleNameCompositesRequest struct {
    PathParams PostRealmClientsIDRolesRoleNameCompositesPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type PostRealmClientsIDRolesRoleNameCompositesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

