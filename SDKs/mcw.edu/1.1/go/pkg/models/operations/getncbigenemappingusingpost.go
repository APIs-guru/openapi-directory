package operations

import (
	"openapi/pkg/models/shared"
)

type GetNcbiGeneMappingUsingPostRequest struct {
	Request *shared.RgdidListRequest `request:"mediaType=application/json"`
}

type GetNcbiGeneMappingUsingPostResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
