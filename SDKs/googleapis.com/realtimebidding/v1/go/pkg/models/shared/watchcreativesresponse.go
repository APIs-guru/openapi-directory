package shared

// WatchCreativesResponse
// A response for the request to receive push notification when a bidder's creatives change status.
type WatchCreativesResponse struct {
	Subscription *string `json:"subscription,omitempty"`
	Topic        *string `json:"topic,omitempty"`
}
