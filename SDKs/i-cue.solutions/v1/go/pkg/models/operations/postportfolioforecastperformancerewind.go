package operations

import (
	"openapi/pkg/models/shared"
)

type PostPortfolioForecastPerformanceRewindHeaders struct {
	Token *string `header:"name=Token"`
}

type PostPortfolioForecastPerformanceRewindRequests struct {
	ForecastPerformanceRequest  *shared.ForecastPerformanceRequest `request:"mediaType=application/*+json"`
	ForecastPerformanceRequest1 *shared.ForecastPerformanceRequest `request:"mediaType=application/json"`
	ForecastPerformanceRequest2 *shared.ForecastPerformanceRequest `request:"mediaType=text/json"`
}

type PostPortfolioForecastPerformanceRewindRequest struct {
	Headers PostPortfolioForecastPerformanceRewindHeaders
	Request *PostPortfolioForecastPerformanceRewindRequests
}

type PostPortfolioForecastPerformanceRewindResponse struct {
	Body           []byte
	ContentType    string
	RewindResponse *shared.RewindResponse
	StatusCode     int64
}
