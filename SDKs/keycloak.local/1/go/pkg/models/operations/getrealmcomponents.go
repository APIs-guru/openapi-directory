package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmComponentsPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmComponentsQueryParams struct {
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Parent *string `queryParam:"style=form,explode=true,name=parent"`
	Type   *string `queryParam:"style=form,explode=true,name=type"`
}

type GetRealmComponentsRequest struct {
	PathParams  GetRealmComponentsPathParams
	QueryParams GetRealmComponentsQueryParams
}

type GetRealmComponentsResponse struct {
	ComponentRepresentations []shared.ComponentRepresentation
	ContentType              string
	StatusCode               int64
}
