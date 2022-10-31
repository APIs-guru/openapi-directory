package operations

import (
	"openapi/pkg/models/shared"
)

type CancelSeriesTimerPathParams struct {
	TimerID string `pathParam:"style=simple,explode=false,name=timerId"`
}

type CancelSeriesTimerSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type CancelSeriesTimerRequest struct {
	PathParams CancelSeriesTimerPathParams
	Security   CancelSeriesTimerSecurity
}

type CancelSeriesTimerResponse struct {
	ContentType string
	StatusCode  int64
}
