package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsCircuitsReadRequest struct {
	PathParams CircuitsCircuitsReadPathParams
}

type CircuitsCircuitsReadResponse struct {
	Circuit     *shared.Circuit
	ContentType string
	StatusCode  int64
}
