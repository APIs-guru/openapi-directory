package operations

import (
	"openapi/pkg/models/shared"
)

type GetGtexMappingUsingPostRequest struct {
	Request *shared.RgdidListRequest `request:"mediaType=application/json"`
}

type GetGtexMappingUsingPostResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
