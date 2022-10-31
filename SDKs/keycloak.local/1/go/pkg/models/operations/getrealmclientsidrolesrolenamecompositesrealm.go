package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDRolesRoleNameCompositesRealmPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type GetRealmClientsIDRolesRoleNameCompositesRealmRequest struct {
	PathParams GetRealmClientsIDRolesRoleNameCompositesRealmPathParams
}

type GetRealmClientsIDRolesRoleNameCompositesRealmResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
