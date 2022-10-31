package operations

import (
	"openapi/pkg/models/shared"
)

type PostSpotsetsRequest struct {
	Request shared.SpotSetCreate `request:"mediaType=application/json"`
}

type PostSpotsetsResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
