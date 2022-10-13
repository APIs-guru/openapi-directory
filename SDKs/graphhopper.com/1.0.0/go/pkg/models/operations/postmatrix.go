package operations

import (
	"openapi/pkg/models/shared"
)

type PostMatrixRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostMatrixResponse struct {
	ContentType    string
	GhError        *shared.GhError
	Headers        map[string][]string
	MatrixResponse *shared.MatrixResponse
	StatusCode     int64
}
