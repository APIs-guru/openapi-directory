package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmRolesRoleNameCompositesPathParams struct {
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type GetRealmRolesRoleNameCompositesRequest struct {
	PathParams GetRealmRolesRoleNameCompositesPathParams
}

type GetRealmRolesRoleNameCompositesResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
