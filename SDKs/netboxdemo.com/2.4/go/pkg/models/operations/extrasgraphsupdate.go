package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasGraphsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasGraphsUpdateRequest struct {
	PathParams ExtrasGraphsUpdatePathParams
	Request    shared.WritableGraph `request:"mediaType=application/json"`
}

type ExtrasGraphsUpdateResponse struct {
	ContentType string
	Graph       *shared.Graph
	StatusCode  int64
}
