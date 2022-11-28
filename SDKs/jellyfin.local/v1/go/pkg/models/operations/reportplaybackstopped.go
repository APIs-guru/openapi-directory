package operations

import (
	"openapi/pkg/models/shared"
)

type ReportPlaybackStoppedRequestsInput struct {
	PlaybackStopInfo  *shared.PlaybackStopInfoInput `request:"mediaType=application/*+json"`
	PlaybackStopInfo1 *shared.PlaybackStopInfoInput `request:"mediaType=application/json"`
	PlaybackStopInfo2 *shared.PlaybackStopInfoInput `request:"mediaType=text/json"`
}

type ReportPlaybackStoppedSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type ReportPlaybackStoppedRequest struct {
	Request  *ReportPlaybackStoppedRequestsInput
	Security ReportPlaybackStoppedSecurity
}

type ReportPlaybackStoppedResponse struct {
	ContentType string
	StatusCode  int64
}
