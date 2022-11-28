package shared

// PlaybackStartInfoInput
// Class PlaybackStartInfo.
type PlaybackStartInfoInput struct {
	AspectRatio            *string           `json:"AspectRatio,omitempty"`
	AudioStreamIndex       *int32            `json:"AudioStreamIndex,omitempty"`
	Brightness             *int32            `json:"Brightness,omitempty"`
	CanSeek                *bool             `json:"CanSeek,omitempty"`
	IsMuted                *bool             `json:"IsMuted,omitempty"`
	IsPaused               *bool             `json:"IsPaused,omitempty"`
	Item                   *BaseItemDtoInput `json:"Item,omitempty"`
	ItemID                 *string           `json:"ItemId,omitempty"`
	LiveStreamID           *string           `json:"LiveStreamId,omitempty"`
	MediaSourceID          *string           `json:"MediaSourceId,omitempty"`
	NowPlayingQueue        []QueueItem       `json:"NowPlayingQueue,omitempty"`
	PlayMethod             *PlayMethodEnum   `json:"PlayMethod,omitempty"`
	PlaySessionID          *string           `json:"PlaySessionId,omitempty"`
	PlaybackStartTimeTicks *int64            `json:"PlaybackStartTimeTicks,omitempty"`
	PlaylistItemID         *string           `json:"PlaylistItemId,omitempty"`
	PositionTicks          *int64            `json:"PositionTicks,omitempty"`
	RepeatMode             *RepeatModeEnum   `json:"RepeatMode,omitempty"`
	SessionID              *string           `json:"SessionId,omitempty"`
	SubtitleStreamIndex    *int32            `json:"SubtitleStreamIndex,omitempty"`
	VolumeLevel            *int32            `json:"VolumeLevel,omitempty"`
}
