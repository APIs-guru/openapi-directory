package operations

import (
	"openapi/pkg/models/shared"
)

type GetMgiMappingUsingPostRequest struct {
	Request *shared.RgdidListRequest `request:"mediaType=application/json"`
}

type GetMgiMappingUsingPostResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
