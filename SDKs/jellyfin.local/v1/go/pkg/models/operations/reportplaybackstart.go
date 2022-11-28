package operations

import (
	"openapi/pkg/models/shared"
)

type ReportPlaybackStartRequestsInput struct {
	PlaybackStartInfo  *shared.PlaybackStartInfoInput `request:"mediaType=application/*+json"`
	PlaybackStartInfo1 *shared.PlaybackStartInfoInput `request:"mediaType=application/json"`
	PlaybackStartInfo2 *shared.PlaybackStartInfoInput `request:"mediaType=text/json"`
}

type ReportPlaybackStartSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type ReportPlaybackStartRequest struct {
	Request  *ReportPlaybackStartRequestsInput
	Security ReportPlaybackStartSecurity
}

type ReportPlaybackStartResponse struct {
	ContentType string
	StatusCode  int64
}
