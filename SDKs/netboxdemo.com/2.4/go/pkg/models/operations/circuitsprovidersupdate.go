package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsProvidersUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CircuitsProvidersUpdateRequest struct {
	PathParams CircuitsProvidersUpdatePathParams
	Request    shared.ProviderInput `request:"mediaType=application/json"`
}

type CircuitsProvidersUpdateResponse struct {
	ContentType string
	Provider    *shared.Provider
	StatusCode  int64
}
