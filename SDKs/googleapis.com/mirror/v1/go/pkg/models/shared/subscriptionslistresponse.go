package shared

// SubscriptionsListResponse
// A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.
type SubscriptionsListResponse struct {
	Items []Subscription
	Kind  *string
}
