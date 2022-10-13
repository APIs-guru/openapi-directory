package operations

import (
	"openapi/pkg/models/shared"
)

type PostForecastOptimalParameterHeaders struct {
	Token *string `header:"name=Token"`
}

type PostForecastOptimalParameterRequests struct {
	PlanningLevelRequest  *shared.PlanningLevelRequest `request:"mediaType=application/*+json"`
	PlanningLevelRequest1 *shared.PlanningLevelRequest `request:"mediaType=application/json"`
	PlanningLevelRequest2 *shared.PlanningLevelRequest `request:"mediaType=text/json"`
}

type PostForecastOptimalParameterRequest struct {
	Headers PostForecastOptimalParameterHeaders
	Request *PostForecastOptimalParameterRequests
}

type PostForecastOptimalParameterResponse struct {
	Body                     []byte
	ContentType              string
	OptimalParameterResponse *shared.OptimalParameterResponse
	StatusCode               int64
}
