package shared

type PlaybackInfoResponse struct {
	ErrorCode     *PlaybackErrorCodeEnum `json:"ErrorCode,omitempty"`
	MediaSources  []MediaSourceInfo      `json:"MediaSources,omitempty"`
	PlaySessionID *string                `json:"PlaySessionId,omitempty"`
}
