package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsCircuitsUpdateRequest struct {
	PathParams CircuitsCircuitsUpdatePathParams
	Request    shared.WritableCircuit `request:"mediaType=application/json"`
}

type CircuitsCircuitsUpdateResponse struct {
	Circuit     *shared.Circuit
	ContentType string
	StatusCode  int64
}
