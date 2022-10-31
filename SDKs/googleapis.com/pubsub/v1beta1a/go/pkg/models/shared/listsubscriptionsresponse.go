package shared



type ListSubscriptionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Subscription []Subscription `json:"subscription,omitempty"`
    
}

