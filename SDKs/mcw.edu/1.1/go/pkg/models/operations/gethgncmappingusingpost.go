package operations

import (
	"openapi/pkg/models/shared"
)

type GetHgncMappingUsingPostRequest struct {
	Request *shared.RgdidListRequest `request:"mediaType=application/json"`
}

type GetHgncMappingUsingPostResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
