package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDRolesRoleNameManagementPermissionsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type GetRealmClientsIDRolesRoleNameManagementPermissionsRequest struct {
    PathParams GetRealmClientsIDRolesRoleNameManagementPermissionsPathParams 
    
}

type GetRealmClientsIDRolesRoleNameManagementPermissionsResponse struct {
    ContentType string 
    ManagementPermissionReference *shared.ManagementPermissionReference 
    StatusCode int64 
    
}

