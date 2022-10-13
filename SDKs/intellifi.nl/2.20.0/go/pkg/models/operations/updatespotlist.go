package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSpotListPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateSpotListRequest struct {
	PathParams UpdateSpotListPathParams
	Request    shared.SpotList `request:"mediaType=application/json"`
}

type UpdateSpotListResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
