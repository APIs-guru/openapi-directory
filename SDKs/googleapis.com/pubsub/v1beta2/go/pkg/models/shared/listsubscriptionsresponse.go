package shared

// ListSubscriptionsResponse
// Response for the `ListSubscriptions` method.
type ListSubscriptionsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Subscriptions []Subscription `json:"subscriptions,omitempty"`
}
