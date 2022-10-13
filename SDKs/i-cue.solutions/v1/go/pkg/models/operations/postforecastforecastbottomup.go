package operations

import (
	"openapi/pkg/models/shared"
)

type PostForecastForecastBottomUpHeaders struct {
	Token *string `header:"name=Token"`
}

type PostForecastForecastBottomUpRequests struct {
	PlanningLevelRequest  *shared.PlanningLevelRequest `request:"mediaType=application/*+json"`
	PlanningLevelRequest1 *shared.PlanningLevelRequest `request:"mediaType=application/json"`
	PlanningLevelRequest2 *shared.PlanningLevelRequest `request:"mediaType=text/json"`
}

type PostForecastForecastBottomUpRequest struct {
	Headers PostForecastForecastBottomUpHeaders
	Request *PostForecastForecastBottomUpRequests
}

type PostForecastForecastBottomUpResponse struct {
	Body                     []byte
	ContentType              string
	ForecastBottomUpResponse *shared.ForecastBottomUpResponse
	StatusCode               int64
}
