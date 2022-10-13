package shared

type ListSubscriptionsResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	Subscriptions []Subscription `json:"subscriptions"`
}
