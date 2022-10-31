package operations

import (
	"openapi/pkg/models/shared"
)

type PostForecastForecastTopDownHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type PostForecastForecastTopDownRequests struct {
	PlanningLevelRequest  *shared.PlanningLevelRequest `request:"mediaType=application/*+json"`
	PlanningLevelRequest1 *shared.PlanningLevelRequest `request:"mediaType=application/json"`
	PlanningLevelRequest2 *shared.PlanningLevelRequest `request:"mediaType=text/json"`
}

type PostForecastForecastTopDownRequest struct {
	Headers PostForecastForecastTopDownHeaders
	Request *PostForecastForecastTopDownRequests
}

type PostForecastForecastTopDownResponse struct {
	ContentType string
	StatusCode  int64
}
