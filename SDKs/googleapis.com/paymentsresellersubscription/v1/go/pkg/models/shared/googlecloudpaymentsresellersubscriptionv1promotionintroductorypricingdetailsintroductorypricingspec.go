package shared

// GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec
// The duration of an introductory pricing promotion.
type GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec struct {
	DiscountAmount      *GoogleCloudPaymentsResellerSubscriptionV1Amount `json:"discountAmount,omitempty"`
	DiscountRatioMicros *string                                          `json:"discountRatioMicros,omitempty"`
	RecurrenceCount     *int32                                           `json:"recurrenceCount,omitempty"`
	RegionCode          *string                                          `json:"regionCode,omitempty"`
}

// GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput
// The duration of an introductory pricing promotion.
type GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput struct {
	DiscountAmount *GoogleCloudPaymentsResellerSubscriptionV1Amount `json:"discountAmount,omitempty"`
}
