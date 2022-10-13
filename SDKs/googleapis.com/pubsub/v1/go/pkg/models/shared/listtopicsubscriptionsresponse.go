package shared

type ListTopicSubscriptionsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Subscriptions []string `json:"subscriptions"`
}
