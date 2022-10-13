package shared

type PlaybackInfoResponse struct {
	ErrorCode     *PlaybackErrorCodeEnum `json:"ErrorCode"`
	MediaSources  []MediaSourceInfo      `json:"MediaSources"`
	PlaySessionID *string                `json:"PlaySessionId"`
}
