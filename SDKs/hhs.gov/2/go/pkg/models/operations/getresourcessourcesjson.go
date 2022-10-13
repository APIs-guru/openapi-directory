package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesSourcesJSONQueryParams struct {
	Max    *int32  `queryParam:"style=form,explode=false,name=max"`
	Offset *int32  `queryParam:"style=form,explode=false,name=offset"`
	Sort   *string `queryParam:"style=form,explode=false,name=sort"`
}

type GetResourcesSourcesJSONRequest struct {
	QueryParams GetResourcesSourcesJSONQueryParams
}

type GetResourcesSourcesJSONResponse struct {
	ContentType    string
	SourceWrappeds []shared.SourceWrapped
	StatusCode     int64
}
