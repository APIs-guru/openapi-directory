package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmRolesRoleNameCompositesClientsClientPathParams struct {
	Client   string `pathParam:"style=simple,explode=false,name=client"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type GetRealmRolesRoleNameCompositesClientsClientRequest struct {
	PathParams GetRealmRolesRoleNameCompositesClientsClientPathParams
}

type GetRealmRolesRoleNameCompositesClientsClientResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
