package shared

type GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse struct {
	NextPageToken *string                                              `json:"nextPageToken,omitempty"`
	Promotions    []GoogleCloudPaymentsResellerSubscriptionV1Promotion `json:"promotions,omitempty"`
}
