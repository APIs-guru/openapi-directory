package shared

// SubscriptionPatchRequest
// Updated details for the subscription.
type SubscriptionPatchRequest struct {
	Active *bool `json:"active,omitempty"`
}
