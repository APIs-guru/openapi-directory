package operations

import (
	"openapi/pkg/models/shared"
)

type PostMappingRequest struct {
	Request []shared.MappingJob `request:"mediaType=application/json"`
}

type PostMappingResponse struct {
	Body                 []byte
	BulkMappingJobResult []interface{}
	ContentType          string
	StatusCode           int64
}
