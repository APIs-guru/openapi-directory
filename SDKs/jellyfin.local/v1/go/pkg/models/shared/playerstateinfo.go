package shared

type PlayerStateInfo struct {
	AudioStreamIndex    *int32          `json:"AudioStreamIndex"`
	CanSeek             *bool           `json:"CanSeek"`
	IsMuted             *bool           `json:"IsMuted"`
	IsPaused            *bool           `json:"IsPaused"`
	MediaSourceID       *string         `json:"MediaSourceId"`
	PlayMethod          *PlayMethodEnum `json:"PlayMethod"`
	PositionTicks       *int64          `json:"PositionTicks"`
	RepeatMode          *RepeatModeEnum `json:"RepeatMode"`
	SubtitleStreamIndex *int32          `json:"SubtitleStreamIndex"`
	VolumeLevel         *int32          `json:"VolumeLevel"`
}
