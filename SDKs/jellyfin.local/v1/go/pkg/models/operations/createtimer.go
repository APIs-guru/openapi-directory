package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTimerRequestsInput struct {
	TimerInfoDto  *shared.TimerInfoDtoInput `request:"mediaType=application/*+json"`
	TimerInfoDto1 *shared.TimerInfoDtoInput `request:"mediaType=application/json"`
	TimerInfoDto2 *shared.TimerInfoDtoInput `request:"mediaType=text/json"`
}

type CreateTimerSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type CreateTimerRequest struct {
	Request  *CreateTimerRequestsInput
	Security CreateTimerSecurity
}

type CreateTimerResponse struct {
	ContentType string
	StatusCode  int64
}
