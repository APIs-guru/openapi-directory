package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmRolesByIDRoleIDManagementPermissionsPathParams struct {
	Realm  string `pathParam:"style=simple,explode=false,name=realm"`
	RoleID string `pathParam:"style=simple,explode=false,name=role-id"`
}

type GetRealmRolesByIDRoleIDManagementPermissionsRequest struct {
	PathParams GetRealmRolesByIDRoleIDManagementPermissionsPathParams
}

type GetRealmRolesByIDRoleIDManagementPermissionsResponse struct {
	ContentType                   string
	ManagementPermissionReference *shared.ManagementPermissionReference
	StatusCode                    int64
}
