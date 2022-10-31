package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmClientsIDRolesRoleNamePathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type PutRealmClientsIDRolesRoleNameRequest struct {
	PathParams PutRealmClientsIDRolesRoleNamePathParams
	Request    shared.RoleRepresentation `request:"mediaType=application/json"`
}

type PutRealmClientsIDRolesRoleNameResponse struct {
	ContentType string
	StatusCode  int64
}
