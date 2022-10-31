package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnsemblTranscriptMappingUsingPostRequest struct {
	Request *shared.RgdidListRequest `request:"mediaType=application/json"`
}

type GetEnsemblTranscriptMappingUsingPostResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
