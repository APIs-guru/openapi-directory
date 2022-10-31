package operations

import (
"openapi/pkg/models/shared")

type DeleteRealmRolesRoleNameCompositesPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type DeleteRealmRolesRoleNameCompositesRequest struct {
    PathParams DeleteRealmRolesRoleNameCompositesPathParams 
    Request []shared.RoleRepresentation `request:"mediaType=application/json"`
    
}

type DeleteRealmRolesRoleNameCompositesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

