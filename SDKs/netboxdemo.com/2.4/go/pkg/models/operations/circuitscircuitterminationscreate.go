package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitTerminationsCreateRequest struct {
	Request shared.WritableCircuitTerminationInput `request:"mediaType=application/json"`
}

type CircuitsCircuitTerminationsCreateResponse struct {
	CircuitTermination *shared.CircuitTermination
	ContentType        string
	StatusCode         int64
}
