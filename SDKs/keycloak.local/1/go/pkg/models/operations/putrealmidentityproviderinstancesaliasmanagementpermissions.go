package operations

import (
"openapi/pkg/models/shared")

type PutRealmIdentityProviderInstancesAliasManagementPermissionsPathParams struct {
    Alias string `pathParam:"style=simple,explode=false,name=alias"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PutRealmIdentityProviderInstancesAliasManagementPermissionsRequest struct {
    PathParams PutRealmIdentityProviderInstancesAliasManagementPermissionsPathParams 
    Request shared.ManagementPermissionReference `request:"mediaType=application/json"`
    
}

type PutRealmIdentityProviderInstancesAliasManagementPermissionsResponse struct {
    ContentType string 
    ManagementPermissionReference *shared.ManagementPermissionReference 
    StatusCode int64 
    
}

