package shared



type SubscriptionSubscriberSnippet struct {
    ChannelID *string `json:"channelId,omitempty"`
    Description *string `json:"description,omitempty"`
    Thumbnails *ThumbnailDetails `json:"thumbnails,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

