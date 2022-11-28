package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsCircuitsPartialUpdateRequest struct {
	PathParams CircuitsCircuitsPartialUpdatePathParams
	Request    shared.WritableCircuitInput `request:"mediaType=application/json"`
}

type CircuitsCircuitsPartialUpdateResponse struct {
	Circuit     *shared.Circuit
	ContentType string
	StatusCode  int64
}
