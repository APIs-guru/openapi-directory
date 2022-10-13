package operations

import (
	"openapi/pkg/models/shared"
)

type ReportPlaybackStartRequests struct {
	PlaybackStartInfo  *shared.PlaybackStartInfo `request:"mediaType=application/*+json"`
	PlaybackStartInfo1 *shared.PlaybackStartInfo `request:"mediaType=application/json"`
	PlaybackStartInfo2 *shared.PlaybackStartInfo `request:"mediaType=text/json"`
}

type ReportPlaybackStartSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type ReportPlaybackStartRequest struct {
	Request  *ReportPlaybackStartRequests
	Security ReportPlaybackStartSecurity
}

type ReportPlaybackStartResponse struct {
	ContentType string
	StatusCode  int64
}
