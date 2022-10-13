package shared

type ListSubscriptionsResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	Subscription  []Subscription `json:"subscription"`
}
