package shared




type GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum string

const (
    GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnumPromotionTypeUnspecified GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum = "PROMOTION_TYPE_UNSPECIFIED"
GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnumPromotionTypeFreeTrial GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum = "PROMOTION_TYPE_FREE_TRIAL"
GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnumPromotionTypeIntroductoryPricing GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
)


type GoogleCloudPaymentsResellerSubscriptionV1Promotion struct {
    ApplicableProducts []string `json:"applicableProducts,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    FreeTrialDuration *GoogleCloudPaymentsResellerSubscriptionV1Duration `json:"freeTrialDuration,omitempty"`
    IntroductoryPricingDetails *GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails `json:"introductoryPricingDetails,omitempty"`
    Name *string `json:"name,omitempty"`
    PromotionType *GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum `json:"promotionType,omitempty"`
    RegionCodes []string `json:"regionCodes,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Titles []GoogleTypeLocalizedText `json:"titles,omitempty"`
    
}

