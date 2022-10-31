package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSeriesTimerPathParams struct {
	TimerID string `pathParam:"style=simple,explode=false,name=timerId"`
}

type UpdateSeriesTimerRequests struct {
	SeriesTimerInfoDto  *shared.SeriesTimerInfoDto `request:"mediaType=application/*+json"`
	SeriesTimerInfoDto1 *shared.SeriesTimerInfoDto `request:"mediaType=application/json"`
	SeriesTimerInfoDto2 *shared.SeriesTimerInfoDto `request:"mediaType=text/json"`
}

type UpdateSeriesTimerSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateSeriesTimerRequest struct {
	PathParams UpdateSeriesTimerPathParams
	Request    *UpdateSeriesTimerRequests
	Security   UpdateSeriesTimerSecurity
}

type UpdateSeriesTimerResponse struct {
	ContentType string
	StatusCode  int64
}
