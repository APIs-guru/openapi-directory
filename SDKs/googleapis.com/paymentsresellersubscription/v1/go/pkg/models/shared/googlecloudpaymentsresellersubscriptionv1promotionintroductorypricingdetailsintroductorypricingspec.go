package shared

type GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec struct {
	DiscountAmount      *GoogleCloudPaymentsResellerSubscriptionV1Amount `json:"discountAmount"`
	DiscountRatioMicros *string                                          `json:"discountRatioMicros"`
	RecurrenceCount     *int32                                           `json:"recurrenceCount"`
	RegionCode          *string                                          `json:"regionCode"`
}
