package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesTagsIDRelatedFormatPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
	ID     int64  `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesTagsIDRelatedFormatQueryParams struct {
	Max    *int32  `queryParam:"style=form,explode=false,name=max"`
	Offset *int32  `queryParam:"style=form,explode=false,name=offset"`
	Sort   *string `queryParam:"style=form,explode=false,name=sort"`
}

type GetResourcesTagsIDRelatedFormatRequest struct {
	PathParams  GetResourcesTagsIDRelatedFormatPathParams
	QueryParams GetResourcesTagsIDRelatedFormatQueryParams
}

type GetResourcesTagsIDRelatedFormatResponse struct {
	ContentType           string
	StatusCode            int64
	TagMarshallerWrappeds []shared.TagMarshallerWrapped
}
