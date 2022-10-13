package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTimerPathParams struct {
	TimerID string `pathParam:"style=simple,explode=false,name=timerId"`
}

type UpdateTimerRequests struct {
	TimerInfoDto  *shared.TimerInfoDto `request:"mediaType=application/*+json"`
	TimerInfoDto1 *shared.TimerInfoDto `request:"mediaType=application/json"`
	TimerInfoDto2 *shared.TimerInfoDto `request:"mediaType=text/json"`
}

type UpdateTimerSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateTimerRequest struct {
	PathParams UpdateTimerPathParams
	Request    *UpdateTimerRequests
	Security   UpdateTimerSecurity
}

type UpdateTimerResponse struct {
	ContentType string
	StatusCode  int64
}
