package shared

type SubscriptionSubscriberSnippet struct {
	ChannelID   *string           `json:"channelId"`
	Description *string           `json:"description"`
	Thumbnails  *ThumbnailDetails `json:"thumbnails"`
	Title       *string           `json:"title"`
}
