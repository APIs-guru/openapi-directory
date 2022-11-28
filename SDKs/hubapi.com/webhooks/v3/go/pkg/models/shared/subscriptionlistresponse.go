package shared

// SubscriptionListResponse
// List of event subscriptions for your app
type SubscriptionListResponse struct {
	Results []SubscriptionResponse `json:"results"`
}
