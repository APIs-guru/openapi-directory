package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitTypesCreateRequest struct {
	Request shared.CircuitTypeInput `request:"mediaType=application/json"`
}

type CircuitsCircuitTypesCreateResponse struct {
	CircuitType *shared.CircuitType
	ContentType string
	StatusCode  int64
}
