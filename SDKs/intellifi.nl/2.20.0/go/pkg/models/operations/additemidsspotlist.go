package operations

import (
	"openapi/pkg/models/shared"
)

type AddItemIdsSpotListPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AddItemIdsSpotListRequest struct {
	PathParams AddItemIdsSpotListPathParams
	Request    []string `request:"mediaType=application/json"`
}

type AddItemIdsSpotListResponse struct {
	ContentType          string
	ResponseListResource *shared.ResponseListResource
	StatusCode           int64
}
