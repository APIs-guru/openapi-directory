package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDRolesRoleNameGroupsPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
	RoleName string `pathParam:"style=simple,explode=false,name=role-name"`
}

type GetRealmClientsIDRolesRoleNameGroupsQueryParams struct {
	BriefRepresentation *bool  `queryParam:"style=form,explode=true,name=briefRepresentation"`
	First               *int32 `queryParam:"style=form,explode=true,name=first"`
	Max                 *int32 `queryParam:"style=form,explode=true,name=max"`
}

type GetRealmClientsIDRolesRoleNameGroupsRequest struct {
	PathParams  GetRealmClientsIDRolesRoleNameGroupsPathParams
	QueryParams GetRealmClientsIDRolesRoleNameGroupsQueryParams
}

type GetRealmClientsIDRolesRoleNameGroupsResponse struct {
	ContentType          string
	GroupRepresentations []shared.GroupRepresentation
	StatusCode           int64
}
