package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmRolesRoleNameUsersPathParams struct {
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type GetRealmRolesRoleNameUsersQueryParams struct {
	First *int32 `queryParam:"style=form,explode=true,name=first"`
	Max   *int32 `queryParam:"style=form,explode=true,name=max"`
}

type GetRealmRolesRoleNameUsersRequest struct {
	PathParams  GetRealmRolesRoleNameUsersPathParams
	QueryParams GetRealmRolesRoleNameUsersQueryParams
}

type GetRealmRolesRoleNameUsersResponse struct {
	ContentType         string
	StatusCode          int64
	UserRepresentations []shared.UserRepresentation
}
