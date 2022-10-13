package operations

import (
	"openapi/pkg/models/shared"
)

type PostHyperparameterHeaders struct {
	Token *string `header:"name=Token"`
}

type PostHyperparameterRequests struct {
	HyperparameterModel  *shared.HyperparameterModel `request:"mediaType=application/*+json"`
	HyperparameterModel1 *shared.HyperparameterModel `request:"mediaType=application/json"`
	HyperparameterModel2 *shared.HyperparameterModel `request:"mediaType=text/json"`
}

type PostHyperparameterRequest struct {
	Headers PostHyperparameterHeaders
	Request *PostHyperparameterRequests
}

type PostHyperparameterResponse struct {
	ContentType string
	StatusCode  int64
}
