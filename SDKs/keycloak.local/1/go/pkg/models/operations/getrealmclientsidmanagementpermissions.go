package operations

import (
"openapi/pkg/models/shared")

type GetRealmClientsIDManagementPermissionsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmClientsIDManagementPermissionsRequest struct {
    PathParams GetRealmClientsIDManagementPermissionsPathParams 
    
}

type GetRealmClientsIDManagementPermissionsResponse struct {
    ContentType string 
    ManagementPermissionReference *shared.ManagementPermissionReference 
    StatusCode int64 
    
}

