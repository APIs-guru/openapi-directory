package operations

import (
	"openapi/pkg/models/shared"
)

type GetIterationsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetIterationsHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type GetIterationsRequest struct {
	PathParams GetIterationsPathParams
	Headers    GetIterationsHeaders
}

type GetIterationsResponse struct {
	Body        []byte
	ContentType string
	Iterations  []shared.Iteration
	StatusCode  int64
}
