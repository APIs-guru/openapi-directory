package operations

import (
	"openapi/pkg/models/shared"
)

type PostSpotsetsRequest struct {
	Request shared.SpotSetCreateInput `request:"mediaType=application/json"`
}

type PostSpotsetsResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
