package operations

import (
"openapi/pkg/models/shared")

type GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type GetRealmIdentityProviderInstancesAliasManagementPermissionsRequest struct {
    PathParams GetRealmIdentityProviderInstancesAliasManagementPermissionsPathParams 
    
}

type GetRealmIdentityProviderInstancesAliasManagementPermissionsResponse struct {
    ContentType string 
    ManagementPermissionReference *shared.ManagementPermissionReference 
    StatusCode int64 
    
}

