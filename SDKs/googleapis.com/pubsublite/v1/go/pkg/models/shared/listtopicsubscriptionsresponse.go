package shared

// ListTopicSubscriptionsResponse
// Response for ListTopicSubscriptions.
type ListTopicSubscriptionsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Subscriptions []string `json:"subscriptions,omitempty"`
}
