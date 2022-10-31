package operations

import (
"openapi/pkg/models/shared")

type DeleteRealmClientsIDRolesRoleNameCompositesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type DeleteRealmClientsIDRolesRoleNameCompositesRequest struct {
    PathParams DeleteRealmClientsIDRolesRoleNameCompositesPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type DeleteRealmClientsIDRolesRoleNameCompositesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

