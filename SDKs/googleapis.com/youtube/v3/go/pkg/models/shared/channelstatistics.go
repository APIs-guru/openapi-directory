package shared



type ChannelStatistics struct {
    CommentCount *string `json:"commentCount,omitempty"`
    HiddenSubscriberCount *bool `json:"hiddenSubscriberCount,omitempty"`
    SubscriberCount *string `json:"subscriberCount,omitempty"`
    VideoCount *string `json:"videoCount,omitempty"`
    ViewCount *string `json:"viewCount,omitempty"`
    
}

