package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsProvidersReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsProvidersReadRequest struct {
	PathParams CircuitsProvidersReadPathParams
}

type CircuitsProvidersReadResponse struct {
	ContentType string
	Provider    *shared.Provider
	StatusCode  int64
}
