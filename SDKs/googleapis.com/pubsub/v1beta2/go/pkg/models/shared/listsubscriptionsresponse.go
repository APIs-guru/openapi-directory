package shared



type ListSubscriptionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Subscriptions []Subscription `json:"subscriptions,omitempty"`
    
}

