package shared

type GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse struct {
	NextPageToken *string                                              `json:"nextPageToken,omitempty"`
	Promotions    []GoogleCloudPaymentsResellerSubscriptionV1Promotion `json:"promotions,omitempty"`
}
