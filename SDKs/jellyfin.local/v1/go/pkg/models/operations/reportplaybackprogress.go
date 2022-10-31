package operations

import (
	"openapi/pkg/models/shared"
)

type ReportPlaybackProgressRequests struct {
	PlaybackProgressInfo  *shared.PlaybackProgressInfo `request:"mediaType=application/*+json"`
	PlaybackProgressInfo1 *shared.PlaybackProgressInfo `request:"mediaType=application/json"`
	PlaybackProgressInfo2 *shared.PlaybackProgressInfo `request:"mediaType=text/json"`
}

type ReportPlaybackProgressSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type ReportPlaybackProgressRequest struct {
	Request  *ReportPlaybackProgressRequests
	Security ReportPlaybackProgressSecurity
}

type ReportPlaybackProgressResponse struct {
	ContentType string
	StatusCode  int64
}
