package shared

type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnumPromotionTypeUnspecified         GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum = "PROMOTION_TYPE_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnumPromotionTypeFreeTrial           GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum = "PROMOTION_TYPE_FREE_TRIAL"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnumPromotionTypeIntroductoryPricing GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
)

type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec struct {
	FreeTrialDuration          *GoogleCloudPaymentsResellerSubscriptionV1Duration                            `json:"freeTrialDuration"`
	IntroductoryPricingDetails *GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails `json:"introductoryPricingDetails"`
	Promotion                  *string                                                                       `json:"promotion"`
	Type                       *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum   `json:"type"`
}
