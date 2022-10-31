package operations

import (
	"openapi/pkg/models/shared"
)

type GetIterationPerformancePathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetIterationPerformanceQueryParams struct {
	OverlapThreshold *float32 `queryParam:"style=form,explode=true,name=overlapThreshold"`
	Threshold        *float32 `queryParam:"style=form,explode=true,name=threshold"`
}

type GetIterationPerformanceHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type GetIterationPerformanceRequest struct {
	PathParams  GetIterationPerformancePathParams
	QueryParams GetIterationPerformanceQueryParams
	Headers     GetIterationPerformanceHeaders
}

type GetIterationPerformanceResponse struct {
	Body                 []byte
	ContentType          string
	IterationPerformance *shared.IterationPerformance
	StatusCode           int64
}
