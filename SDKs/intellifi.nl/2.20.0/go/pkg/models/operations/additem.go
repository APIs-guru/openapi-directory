package operations

import (
	"openapi/pkg/models/shared"
)

type AddItemRequest struct {
	Request shared.Item `request:"mediaType=application/json"`
}

type AddItemResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
