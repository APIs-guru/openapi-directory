package shared

type GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse struct {
	NextPageToken *string                                              `json:"nextPageToken"`
	Promotions    []GoogleCloudPaymentsResellerSubscriptionV1Promotion `json:"promotions"`
}
