package operations

import (
	"openapi/pkg/models/shared"
)

type PostForecastHistoryAndForecastHeaders struct {
	Token *string `header:"name=Token"`
}

type PostForecastHistoryAndForecastRequests struct {
	PlanningLevelRequest  *shared.PlanningLevelRequest `request:"mediaType=application/*+json"`
	PlanningLevelRequest1 *shared.PlanningLevelRequest `request:"mediaType=application/json"`
	PlanningLevelRequest2 *shared.PlanningLevelRequest `request:"mediaType=text/json"`
}

type PostForecastHistoryAndForecastRequest struct {
	Headers PostForecastHistoryAndForecastHeaders
	Request *PostForecastHistoryAndForecastRequests
}

type PostForecastHistoryAndForecastResponse struct {
	Body                       []byte
	ContentType                string
	HistoryAndForecastResponse *shared.HistoryAndForecastResponse
	StatusCode                 int64
}
