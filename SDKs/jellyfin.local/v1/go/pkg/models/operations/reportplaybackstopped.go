package operations

import (
	"openapi/pkg/models/shared"
)

type ReportPlaybackStoppedRequests struct {
	PlaybackStopInfo  *shared.PlaybackStopInfo `request:"mediaType=application/*+json"`
	PlaybackStopInfo1 *shared.PlaybackStopInfo `request:"mediaType=application/json"`
	PlaybackStopInfo2 *shared.PlaybackStopInfo `request:"mediaType=text/json"`
}

type ReportPlaybackStoppedSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type ReportPlaybackStoppedRequest struct {
	Request  *ReportPlaybackStoppedRequests
	Security ReportPlaybackStoppedSecurity
}

type ReportPlaybackStoppedResponse struct {
	ContentType string
	StatusCode  int64
}
