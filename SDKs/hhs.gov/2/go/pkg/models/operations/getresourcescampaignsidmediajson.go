package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesCampaignsIDMediaJSONPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesCampaignsIDMediaJSONQueryParams struct {
	Max    *int32  `queryParam:"style=form,explode=false,name=max"`
	Offset *int32  `queryParam:"style=form,explode=false,name=offset"`
	Sort   *string `queryParam:"style=form,explode=false,name=sort"`
}

type GetResourcesCampaignsIDMediaJSONRequest struct {
	PathParams  GetResourcesCampaignsIDMediaJSONPathParams
	QueryParams GetResourcesCampaignsIDMediaJSONQueryParams
}

type GetResourcesCampaignsIDMediaJSONResponse struct {
	ContentType      string
	MediaItemWrapped *shared.MediaItemWrapped
	StatusCode       int64
}
