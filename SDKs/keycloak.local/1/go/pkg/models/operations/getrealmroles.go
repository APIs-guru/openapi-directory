package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmRolesPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmRolesQueryParams struct {
	BriefRepresentation *bool   `queryParam:"style=form,explode=true,name=briefRepresentation"`
	First               *int32  `queryParam:"style=form,explode=true,name=first"`
	Max                 *int32  `queryParam:"style=form,explode=true,name=max"`
	Search              *string `queryParam:"style=form,explode=true,name=search"`
}

type GetRealmRolesRequest struct {
	PathParams  GetRealmRolesPathParams
	QueryParams GetRealmRolesQueryParams
}

type GetRealmRolesResponse struct {
	ContentType         string
	RoleRepresentations []shared.RoleRepresentation
	StatusCode          int64
}
