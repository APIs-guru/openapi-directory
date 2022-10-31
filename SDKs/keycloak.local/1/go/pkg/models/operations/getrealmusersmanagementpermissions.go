package operations

import (
"openapi/pkg/models/shared")

type GetRealmUsersManagementPermissionsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmUsersManagementPermissionsRequest struct {
    PathParams GetRealmUsersManagementPermissionsPathParams 
    
}

type GetRealmUsersManagementPermissionsResponse struct {
    ContentType string 
    ManagementPermissionReference *shared.ManagementPermissionReference 
    StatusCode int64 
    
}

