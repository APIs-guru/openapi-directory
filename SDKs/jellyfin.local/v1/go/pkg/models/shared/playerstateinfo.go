package shared



type PlayerStateInfo struct {
    AudioStreamIndex *int32 `json:"AudioStreamIndex,omitempty"`
    CanSeek *bool `json:"CanSeek,omitempty"`
    IsMuted *bool `json:"IsMuted,omitempty"`
    IsPaused *bool `json:"IsPaused,omitempty"`
    MediaSourceID *string `json:"MediaSourceId,omitempty"`
    PlayMethod *PlayMethodEnum `json:"PlayMethod,omitempty"`
    PositionTicks *int64 `json:"PositionTicks,omitempty"`
    RepeatMode *RepeatModeEnum `json:"RepeatMode,omitempty"`
    SubtitleStreamIndex *int32 `json:"SubtitleStreamIndex,omitempty"`
    VolumeLevel *int32 `json:"VolumeLevel,omitempty"`
    
}

