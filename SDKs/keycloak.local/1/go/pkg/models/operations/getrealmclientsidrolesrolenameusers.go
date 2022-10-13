package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDRolesRoleNameUsersPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type GetRealmClientsIDRolesRoleNameUsersQueryParams struct {
	First *int32 `queryParam:"style=form,explode=true,name=first"`
	Max   *int32 `queryParam:"style=form,explode=true,name=max"`
}

type GetRealmClientsIDRolesRoleNameUsersRequest struct {
	PathParams  GetRealmClientsIDRolesRoleNameUsersPathParams
	QueryParams GetRealmClientsIDRolesRoleNameUsersQueryParams
}

type GetRealmClientsIDRolesRoleNameUsersResponse struct {
	ContentType         string
	StatusCode          int64
	UserRepresentations []shared.UserRepresentation
}
