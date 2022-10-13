package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmGroupsIDMembersPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmGroupsIDMembersQueryParams struct {
	BriefRepresentation *bool  `queryParam:"style=form,explode=true,name=briefRepresentation"`
	First               *int32 `queryParam:"style=form,explode=true,name=first"`
	Max                 *int32 `queryParam:"style=form,explode=true,name=max"`
}

type GetRealmGroupsIDMembersRequest struct {
	PathParams  GetRealmGroupsIDMembersPathParams
	QueryParams GetRealmGroupsIDMembersQueryParams
}

type GetRealmGroupsIDMembersResponse struct {
	ContentType         string
	StatusCode          int64
	UserRepresentations []shared.UserRepresentation
}
