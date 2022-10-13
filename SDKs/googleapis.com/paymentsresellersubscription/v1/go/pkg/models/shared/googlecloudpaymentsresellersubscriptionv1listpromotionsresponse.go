package shared

type GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse struct {
	NextPageToken *string                                              `json:"nextPageToken"`
	Promotions    []GoogleCloudPaymentsResellerSubscriptionV1Promotion `json:"promotions"`
}
