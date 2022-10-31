package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsProvidersGraphsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsProvidersGraphsRequest struct {
	PathParams CircuitsProvidersGraphsPathParams
}

type CircuitsProvidersGraphsResponse struct {
	ContentType string
	Provider    *shared.Provider
	StatusCode  int64
}
