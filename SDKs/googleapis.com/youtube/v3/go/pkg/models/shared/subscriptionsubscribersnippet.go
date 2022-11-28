package shared

// SubscriptionSubscriberSnippet
// Basic details about a subscription's subscriber including title, description, channel ID and thumbnails.
type SubscriptionSubscriberSnippet struct {
	ChannelID   *string           `json:"channelId,omitempty"`
	Description *string           `json:"description,omitempty"`
	Thumbnails  *ThumbnailDetails `json:"thumbnails,omitempty"`
	Title       *string           `json:"title,omitempty"`
}
