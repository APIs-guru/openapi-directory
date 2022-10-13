package operations

import (
	"openapi/pkg/models/shared"
)

type AddSpotListRequest struct {
	Request shared.ItemList `request:"mediaType=application/json"`
}

type AddSpotListResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
