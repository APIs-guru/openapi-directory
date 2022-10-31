package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmGroupsPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmGroupsQueryParams struct {
	BriefRepresentation *bool   `queryParam:"style=form,explode=true,name=briefRepresentation"`
	First               *int32  `queryParam:"style=form,explode=true,name=first"`
	Max                 *int32  `queryParam:"style=form,explode=true,name=max"`
	Search              *string `queryParam:"style=form,explode=true,name=search"`
}

type GetRealmGroupsRequest struct {
	PathParams  GetRealmGroupsPathParams
	QueryParams GetRealmGroupsQueryParams
}

type GetRealmGroupsResponse struct {
	ContentType          string
	GroupRepresentations []shared.GroupRepresentation
	StatusCode           int64
}
