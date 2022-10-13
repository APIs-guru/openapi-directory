package shared

type PlaybackStartInfo struct {
	AspectRatio            *string         `json:"AspectRatio"`
	AudioStreamIndex       *int32          `json:"AudioStreamIndex"`
	Brightness             *int32          `json:"Brightness"`
	CanSeek                *bool           `json:"CanSeek"`
	IsMuted                *bool           `json:"IsMuted"`
	IsPaused               *bool           `json:"IsPaused"`
	Item                   *BaseItemDto    `json:"Item"`
	ItemID                 *string         `json:"ItemId"`
	LiveStreamID           *string         `json:"LiveStreamId"`
	MediaSourceID          *string         `json:"MediaSourceId"`
	NowPlayingQueue        []QueueItem     `json:"NowPlayingQueue"`
	PlayMethod             *PlayMethodEnum `json:"PlayMethod"`
	PlaySessionID          *string         `json:"PlaySessionId"`
	PlaybackStartTimeTicks *int64          `json:"PlaybackStartTimeTicks"`
	PlaylistItemID         *string         `json:"PlaylistItemId"`
	PositionTicks          *int64          `json:"PositionTicks"`
	RepeatMode             *RepeatModeEnum `json:"RepeatMode"`
	SessionID              *string         `json:"SessionId"`
	SubtitleStreamIndex    *int32          `json:"SubtitleStreamIndex"`
	VolumeLevel            *int32          `json:"VolumeLevel"`
}
