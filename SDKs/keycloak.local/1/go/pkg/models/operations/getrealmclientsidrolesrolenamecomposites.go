package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDRolesRoleNameCompositesPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type GetRealmClientsIDRolesRoleNameCompositesRequest struct {
	PathParams GetRealmClientsIDRolesRoleNameCompositesPathParams
}

type GetRealmClientsIDRolesRoleNameCompositesResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
