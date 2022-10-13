package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitTypesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsCircuitTypesUpdateRequest struct {
	PathParams CircuitsCircuitTypesUpdatePathParams
	Request    shared.CircuitType `request:"mediaType=application/json"`
}

type CircuitsCircuitTypesUpdateResponse struct {
	CircuitType *shared.CircuitType
	ContentType string
	StatusCode  int64
}
