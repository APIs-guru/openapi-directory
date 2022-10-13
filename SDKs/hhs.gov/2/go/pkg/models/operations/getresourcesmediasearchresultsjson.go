package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesMediaSearchResultsJSONQueryParams struct {
	Max    *int32 `queryParam:"style=form,explode=false,name=max"`
	Offset *int32 `queryParam:"style=form,explode=false,name=offset"`
	Q      string `queryParam:"style=form,explode=false,name=q"`
}

type GetResourcesMediaSearchResultsJSONRequest struct {
	QueryParams GetResourcesMediaSearchResultsJSONQueryParams
}

type GetResourcesMediaSearchResultsJSONResponse struct {
	ContentType       string
	MediaItemWrappeds []shared.MediaItemWrapped
	StatusCode        int64
}
