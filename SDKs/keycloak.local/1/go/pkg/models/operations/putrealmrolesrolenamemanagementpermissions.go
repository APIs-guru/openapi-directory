package operations

import (
"openapi/pkg/models/shared")

type PutRealmRolesRoleNameManagementPermissionsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
    
}

type PutRealmRolesRoleNameManagementPermissionsRequest struct {
    PathParams PutRealmRolesRoleNameManagementPermissionsPathParams 
    Request shared.ManagementPermissionReference `request:"mediaType=application/json"`
    
}

type PutRealmRolesRoleNameManagementPermissionsResponse struct {
    ContentType string 
    ManagementPermissionReference *shared.ManagementPermissionReference 
    StatusCode int64 
    
}

