package operations

import (
	"openapi/pkg/models/shared"
)

type CalculateMatrixRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type CalculateMatrixResponse struct {
	ContentType string
	GhError     *shared.GhError
	Headers     map[string][]string
	JobID       *shared.JobID
	StatusCode  int64
}
