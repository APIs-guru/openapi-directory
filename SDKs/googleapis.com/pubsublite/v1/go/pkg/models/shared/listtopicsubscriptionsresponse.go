package shared



type ListTopicSubscriptionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Subscriptions []string `json:"subscriptions,omitempty"`
    
}

