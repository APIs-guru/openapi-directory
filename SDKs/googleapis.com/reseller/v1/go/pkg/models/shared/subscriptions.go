package shared

// Subscriptions
// A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions.
type Subscriptions struct {
	Kind          *string        `json:"kind,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Subscriptions []Subscription `json:"subscriptions,omitempty"`
}
