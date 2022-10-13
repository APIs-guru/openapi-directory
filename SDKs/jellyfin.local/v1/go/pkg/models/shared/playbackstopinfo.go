package shared

type PlaybackStopInfo struct {
	Failed          *bool        `json:"Failed"`
	Item            *BaseItemDto `json:"Item"`
	ItemID          *string      `json:"ItemId"`
	LiveStreamID    *string      `json:"LiveStreamId"`
	MediaSourceID   *string      `json:"MediaSourceId"`
	NextMediaType   *string      `json:"NextMediaType"`
	NowPlayingQueue []QueueItem  `json:"NowPlayingQueue"`
	PlaySessionID   *string      `json:"PlaySessionId"`
	PlaylistItemID  *string      `json:"PlaylistItemId"`
	PositionTicks   *int64       `json:"PositionTicks"`
	SessionID       *string      `json:"SessionId"`
}
