package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSeriesTimerRequests struct {
	SeriesTimerInfoDto  *shared.SeriesTimerInfoDto `request:"mediaType=application/*+json"`
	SeriesTimerInfoDto1 *shared.SeriesTimerInfoDto `request:"mediaType=application/json"`
	SeriesTimerInfoDto2 *shared.SeriesTimerInfoDto `request:"mediaType=text/json"`
}

type CreateSeriesTimerSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type CreateSeriesTimerRequest struct {
	Request  *CreateSeriesTimerRequests
	Security CreateSeriesTimerSecurity
}

type CreateSeriesTimerResponse struct {
	ContentType string
	StatusCode  int64
}
