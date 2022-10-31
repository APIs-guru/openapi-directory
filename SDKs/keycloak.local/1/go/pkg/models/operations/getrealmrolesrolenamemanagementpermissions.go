package operations

import (
"openapi/pkg/models/shared")

type GetRealmRolesRoleNameManagementPermissionsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type GetRealmRolesRoleNameManagementPermissionsRequest struct {
    PathParams GetRealmRolesRoleNameManagementPermissionsPathParams 
    
}

type GetRealmRolesRoleNameManagementPermissionsResponse struct {
    ContentType string 
    ManagementPermissionReference *shared.ManagementPermissionReference 
    StatusCode int64 
    
}

