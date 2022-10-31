package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitTypesCreateRequest struct {
	Request shared.CircuitType `request:"mediaType=application/json"`
}

type CircuitsCircuitTypesCreateResponse struct {
	CircuitType *shared.CircuitType
	ContentType string
	StatusCode  int64
}
