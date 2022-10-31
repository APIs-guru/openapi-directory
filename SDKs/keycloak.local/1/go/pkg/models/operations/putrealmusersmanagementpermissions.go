package operations

import (
"openapi/pkg/models/shared")

type PutRealmUsersManagementPermissionsPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmUsersManagementPermissionsRequest struct {
    PathParams PutRealmUsersManagementPermissionsPathParams 
    Request shared.ManagementPermissionReference `request:"mediaType=application/json"`
    
}

type PutRealmUsersManagementPermissionsResponse struct {
    ContentType string 
    ManagementPermissionReference *shared.ManagementPermissionReference 
    StatusCode int64 
    
}

