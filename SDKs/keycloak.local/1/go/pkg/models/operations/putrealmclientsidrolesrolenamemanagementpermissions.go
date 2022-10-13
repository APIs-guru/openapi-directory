package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmClientsIDRolesRoleNameManagementPermissionsPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type PutRealmClientsIDRolesRoleNameManagementPermissionsRequest struct {
	PathParams PutRealmClientsIDRolesRoleNameManagementPermissionsPathParams
	Request    shared.ManagementPermissionReference `request:"mediaType=application/json"`
}

type PutRealmClientsIDRolesRoleNameManagementPermissionsResponse struct {
	ContentType                   string
	ManagementPermissionReference *shared.ManagementPermissionReference
	StatusCode                    int64
}
