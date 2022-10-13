package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesMediaIDRelatedMediaFormatPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
	ID     int64  `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesMediaIDRelatedMediaFormatQueryParams struct {
	Max    *int32  `queryParam:"style=form,explode=false,name=max"`
	Offset *int32  `queryParam:"style=form,explode=false,name=offset"`
	Sort   *string `queryParam:"style=form,explode=false,name=sort"`
}

type GetResourcesMediaIDRelatedMediaFormatRequest struct {
	PathParams  GetResourcesMediaIDRelatedMediaFormatPathParams
	QueryParams GetResourcesMediaIDRelatedMediaFormatQueryParams
}

type GetResourcesMediaIDRelatedMediaFormatResponse struct {
	ContentType       string
	MediaItemWrappeds []shared.MediaItemWrapped
	StatusCode        int64
}
