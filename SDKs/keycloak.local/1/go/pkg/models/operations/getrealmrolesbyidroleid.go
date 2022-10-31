package operations

import (
"openapi/pkg/models/shared")

type GetRealmRolesByIDRoleIDPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleID string `pathParam:"style=simple,explode=false,name=role-id"`
    
}

type GetRealmRolesByIDRoleIDRequest struct {
    PathParams GetRealmRolesByIDRoleIDPathParams 
    
}

type GetRealmRolesByIDRoleIDResponse struct {
    ContentType string 
    RoleRepresentation *shared.RoleRepresentation 
    StatusCode int64 
    
}

