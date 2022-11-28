package shared

// ListTopicSubscriptionsResponse
// Response for the `ListTopicSubscriptions` method.
type ListTopicSubscriptionsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Subscriptions []string `json:"subscriptions,omitempty"`
}
