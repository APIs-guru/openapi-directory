package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSpotPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateSpotRequest struct {
	PathParams UpdateSpotPathParams
	Request    shared.SpotUpdateInput `request:"mediaType=application/json"`
}

type UpdateSpotResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
