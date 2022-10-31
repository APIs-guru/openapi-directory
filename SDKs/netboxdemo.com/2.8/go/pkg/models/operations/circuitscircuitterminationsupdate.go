package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitTerminationsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsCircuitTerminationsUpdateRequest struct {
	PathParams CircuitsCircuitTerminationsUpdatePathParams
	Request    shared.WritableCircuitTermination `request:"mediaType=application/json"`
}

type CircuitsCircuitTerminationsUpdateResponse struct {
	CircuitTermination *shared.CircuitTermination
	ContentType        string
	StatusCode         int64
}
