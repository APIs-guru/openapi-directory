package shared

// ChannelStatistics
// Statistics about a channel: number of subscribers, number of videos in the channel, etc.
type ChannelStatistics struct {
	CommentCount          *string `json:"commentCount,omitempty"`
	HiddenSubscriberCount *bool   `json:"hiddenSubscriberCount,omitempty"`
	SubscriberCount       *string `json:"subscriberCount,omitempty"`
	VideoCount            *string `json:"videoCount,omitempty"`
	ViewCount             *string `json:"viewCount,omitempty"`
}
