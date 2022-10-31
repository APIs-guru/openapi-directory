package operations

import (
	"openapi/pkg/models/shared"
)

type GetIterationPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetIterationHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type GetIterationRequest struct {
	PathParams GetIterationPathParams
	Headers    GetIterationHeaders
}

type GetIterationResponse struct {
	Body        []byte
	ContentType string
	Iteration   *shared.Iteration
	StatusCode  int64
}
