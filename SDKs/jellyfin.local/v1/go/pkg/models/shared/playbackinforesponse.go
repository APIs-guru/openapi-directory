package shared

// PlaybackInfoResponse
// Class PlaybackInfoResponse.
type PlaybackInfoResponse struct {
	ErrorCode     *PlaybackErrorCodeEnum `json:"ErrorCode,omitempty"`
	MediaSources  []MediaSourceInfo      `json:"MediaSources,omitempty"`
	PlaySessionID *string                `json:"PlaySessionId,omitempty"`
}
