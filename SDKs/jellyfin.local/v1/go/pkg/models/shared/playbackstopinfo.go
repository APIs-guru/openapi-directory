package shared

type PlaybackStopInfo struct {
	Failed          *bool        `json:"Failed,omitempty"`
	Item            *BaseItemDto `json:"Item,omitempty"`
	ItemID          *string      `json:"ItemId,omitempty"`
	LiveStreamID    *string      `json:"LiveStreamId,omitempty"`
	MediaSourceID   *string      `json:"MediaSourceId,omitempty"`
	NextMediaType   *string      `json:"NextMediaType,omitempty"`
	NowPlayingQueue []QueueItem  `json:"NowPlayingQueue,omitempty"`
	PlaySessionID   *string      `json:"PlaySessionId,omitempty"`
	PlaylistItemID  *string      `json:"PlaylistItemId,omitempty"`
	PositionTicks   *int64       `json:"PositionTicks,omitempty"`
	SessionID       *string      `json:"SessionId,omitempty"`
}
