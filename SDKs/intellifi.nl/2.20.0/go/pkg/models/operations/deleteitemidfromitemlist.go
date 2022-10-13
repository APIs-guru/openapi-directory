package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteItemIDFromItemListPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type DeleteItemIDFromItemListRequest struct {
	PathParams DeleteItemIDFromItemListPathParams
}

type DeleteItemIDFromItemListResponse struct {
	ContentType          string
	ResponseListResource *shared.ResponseListResource
	StatusCode           int64
}
