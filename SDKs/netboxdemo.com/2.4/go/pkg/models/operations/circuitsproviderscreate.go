package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsProvidersCreateRequest struct {
	Request shared.ProviderInput `request:"mediaType=application/json"`
}

type CircuitsProvidersCreateResponse struct {
	ContentType string
	Provider    *shared.Provider
	StatusCode  int64
}
