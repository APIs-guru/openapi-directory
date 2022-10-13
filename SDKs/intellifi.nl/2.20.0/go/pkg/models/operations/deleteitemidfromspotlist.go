package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteItemIDFromSpotListPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type DeleteItemIDFromSpotListRequest struct {
	PathParams DeleteItemIDFromSpotListPathParams
}

type DeleteItemIDFromSpotListResponse struct {
	ContentType          string
	ResponseListResource *shared.ResponseListResource
	StatusCode           int64
}
