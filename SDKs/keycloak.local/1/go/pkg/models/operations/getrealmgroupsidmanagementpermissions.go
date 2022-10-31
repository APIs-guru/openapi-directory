package operations

import (
"openapi/pkg/models/shared")

type GetRealmGroupsIDManagementPermissionsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmGroupsIDManagementPermissionsRequest struct {
    PathParams GetRealmGroupsIDManagementPermissionsPathParams 
    
}

type GetRealmGroupsIDManagementPermissionsResponse struct {
    ContentType string 
    ManagementPermissionReference *shared.ManagementPermissionReference 
    StatusCode int64 
    
}

