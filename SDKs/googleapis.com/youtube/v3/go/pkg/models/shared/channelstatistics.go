package shared

type ChannelStatistics struct {
	CommentCount          *string `json:"commentCount"`
	HiddenSubscriberCount *bool   `json:"hiddenSubscriberCount"`
	SubscriberCount       *string `json:"subscriberCount"`
	VideoCount            *string `json:"videoCount"`
	ViewCount             *string `json:"viewCount"`
}
