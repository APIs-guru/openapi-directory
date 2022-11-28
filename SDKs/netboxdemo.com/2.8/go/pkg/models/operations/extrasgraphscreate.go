package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasGraphsCreateRequest struct {
	Request shared.GraphInput `request:"mediaType=application/json"`
}

type ExtrasGraphsCreateResponse struct {
	ContentType string
	Graph       *shared.Graph
	StatusCode  int64
}
