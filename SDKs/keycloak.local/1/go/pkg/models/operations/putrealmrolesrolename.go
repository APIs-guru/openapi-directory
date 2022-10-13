package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmRolesRoleNamePathParams struct {
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type PutRealmRolesRoleNameRequest struct {
	PathParams PutRealmRolesRoleNamePathParams
	Request    shared.RoleRepresentation `request:"mediaType=application/json"`
}

type PutRealmRolesRoleNameResponse struct {
	ContentType string
	StatusCode  int64
}
