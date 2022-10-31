package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesMediaFeaturedJSONQueryParams struct {
	Max    *int32  `queryParam:"style=form,explode=false,name=max"`
	Offset *int32  `queryParam:"style=form,explode=false,name=offset"`
	Sort   *string `queryParam:"style=form,explode=false,name=sort"`
}

type GetResourcesMediaFeaturedJSONRequest struct {
	QueryParams GetResourcesMediaFeaturedJSONQueryParams
}

type GetResourcesMediaFeaturedJSONResponse struct {
	ContentType string
	MediaItems  []shared.MediaItem
	StatusCode  int64
}
