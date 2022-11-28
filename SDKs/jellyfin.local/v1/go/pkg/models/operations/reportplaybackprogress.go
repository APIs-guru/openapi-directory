package operations

import (
	"openapi/pkg/models/shared"
)

type ReportPlaybackProgressRequestsInput struct {
	PlaybackProgressInfo  *shared.PlaybackProgressInfoInput `request:"mediaType=application/*+json"`
	PlaybackProgressInfo1 *shared.PlaybackProgressInfoInput `request:"mediaType=application/json"`
	PlaybackProgressInfo2 *shared.PlaybackProgressInfoInput `request:"mediaType=text/json"`
}

type ReportPlaybackProgressSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type ReportPlaybackProgressRequest struct {
	Request  *ReportPlaybackProgressRequestsInput
	Security ReportPlaybackProgressSecurity
}

type ReportPlaybackProgressResponse struct {
	ContentType string
	StatusCode  int64
}
