package shared



type Subscriptions struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Subscriptions []Subscription `json:"subscriptions,omitempty"`
    
}

