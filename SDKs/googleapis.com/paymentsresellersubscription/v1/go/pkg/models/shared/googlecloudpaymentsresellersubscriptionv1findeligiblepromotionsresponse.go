package shared

// GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse
// Response containing the found promotions for the current user.
type GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse struct {
	NextPageToken *string                                              `json:"nextPageToken,omitempty"`
	Promotions    []GoogleCloudPaymentsResellerSubscriptionV1Promotion `json:"promotions,omitempty"`
}
