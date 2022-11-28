package shared

// ListSubscriptionsResponse
// Response for ListSubscriptions.
type ListSubscriptionsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Subscriptions []Subscription `json:"subscriptions,omitempty"`
}
