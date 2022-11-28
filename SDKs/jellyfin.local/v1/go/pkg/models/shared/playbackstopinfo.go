package shared

// PlaybackStopInfoInput
// Class PlaybackStopInfo.
type PlaybackStopInfoInput struct {
	Failed          *bool             `json:"Failed,omitempty"`
	Item            *BaseItemDtoInput `json:"Item,omitempty"`
	ItemID          *string           `json:"ItemId,omitempty"`
	LiveStreamID    *string           `json:"LiveStreamId,omitempty"`
	MediaSourceID   *string           `json:"MediaSourceId,omitempty"`
	NextMediaType   *string           `json:"NextMediaType,omitempty"`
	NowPlayingQueue []QueueItem       `json:"NowPlayingQueue,omitempty"`
	PlaySessionID   *string           `json:"PlaySessionId,omitempty"`
	PlaylistItemID  *string           `json:"PlaylistItemId,omitempty"`
	PositionTicks   *int64            `json:"PositionTicks,omitempty"`
	SessionID       *string           `json:"SessionId,omitempty"`
}
