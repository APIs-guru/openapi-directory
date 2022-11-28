package shared

// PublicSubscriptionStatusesResponse
// A collection of subscription statuses for a contact.
type PublicSubscriptionStatusesResponse struct {
	Recipient            string                     `json:"recipient"`
	SubscriptionStatuses []PublicSubscriptionStatus `json:"subscriptionStatuses"`
}
