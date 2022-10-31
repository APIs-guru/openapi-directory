package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnsemblGeneMappingUsingPostRequest struct {
	Request *shared.RgdidListRequest `request:"mediaType=application/json"`
}

type GetEnsemblGeneMappingUsingPostResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
