package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDRolesRoleNamePathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type GetRealmClientsIDRolesRoleNameRequest struct {
	PathParams GetRealmClientsIDRolesRoleNamePathParams
}

type GetRealmClientsIDRolesRoleNameResponse struct {
	ContentType        string
	RoleRepresentation *shared.RoleRepresentation
	StatusCode         int64
}
