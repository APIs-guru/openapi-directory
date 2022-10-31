package shared



type GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec struct {
    DiscountAmount *GoogleCloudPaymentsResellerSubscriptionV1Amount `json:"discountAmount,omitempty"`
    DiscountRatioMicros *string `json:"discountRatioMicros,omitempty"`
    RecurrenceCount *int32 `json:"recurrenceCount,omitempty"`
    RegionCode *string `json:"regionCode,omitempty"`
    
}

