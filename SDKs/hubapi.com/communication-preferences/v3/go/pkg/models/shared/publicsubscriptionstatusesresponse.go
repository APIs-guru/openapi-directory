package shared

type PublicSubscriptionStatusesResponse struct {
	Recipient            string                     `json:"recipient"`
	SubscriptionStatuses []PublicSubscriptionStatus `json:"subscriptionStatuses"`
}
