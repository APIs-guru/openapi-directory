package operations

import (
	"openapi/pkg/models/shared"
)

type PostForecastAiHistoryAndForecastHeaders struct {
	Token *string `header:"name=Token"`
}

type PostForecastAiHistoryAndForecastRequests struct {
	AiPlanningLevelRequest  *shared.AiPlanningLevelRequest `request:"mediaType=application/*+json"`
	AiPlanningLevelRequest1 *shared.AiPlanningLevelRequest `request:"mediaType=application/json"`
	AiPlanningLevelRequest2 *shared.AiPlanningLevelRequest `request:"mediaType=text/json"`
}

type PostForecastAiHistoryAndForecastRequest struct {
	Headers PostForecastAiHistoryAndForecastHeaders
	Request *PostForecastAiHistoryAndForecastRequests
}

type PostForecastAiHistoryAndForecastResponse struct {
	Body                       []byte
	ContentType                string
	HistoryAndForecastResponse *shared.HistoryAndForecastResponse
	StatusCode                 int64
}
