package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitsCreateRequest struct {
	Request shared.WritableCircuitInput `request:"mediaType=application/json"`
}

type CircuitsCircuitsCreateResponse struct {
	Circuit     *shared.Circuit
	ContentType string
	StatusCode  int64
}
