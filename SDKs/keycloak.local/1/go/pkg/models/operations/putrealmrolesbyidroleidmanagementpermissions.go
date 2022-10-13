package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmRolesByIDRoleIDManagementPermissionsPathParams struct {
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
	RoleID string `pathParam:"style=simple,explode=false,name=role-id"`
}

type PutRealmRolesByIDRoleIDManagementPermissionsRequest struct {
	PathParams PutRealmRolesByIDRoleIDManagementPermissionsPathParams
	Request    shared.ManagementPermissionReference `request:"mediaType=application/json"`
}

type PutRealmRolesByIDRoleIDManagementPermissionsResponse struct {
	ContentType                   string
	ManagementPermissionReference *shared.ManagementPermissionReference
	StatusCode                    int64
}
