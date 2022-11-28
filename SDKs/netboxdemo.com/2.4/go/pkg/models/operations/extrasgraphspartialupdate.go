package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasGraphsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasGraphsPartialUpdateRequest struct {
	PathParams ExtrasGraphsPartialUpdatePathParams
	Request    shared.WritableGraphInput `request:"mediaType=application/json"`
}

type ExtrasGraphsPartialUpdateResponse struct {
	ContentType string
	Graph       *shared.Graph
	StatusCode  int64
}
