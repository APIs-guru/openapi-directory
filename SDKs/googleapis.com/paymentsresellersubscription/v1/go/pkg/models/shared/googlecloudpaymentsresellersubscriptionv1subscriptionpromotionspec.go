package shared

type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnumPromotionTypeUnspecified         GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum = "PROMOTION_TYPE_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnumPromotionTypeFreeTrial           GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum = "PROMOTION_TYPE_FREE_TRIAL"
	GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnumPromotionTypeIntroductoryPricing GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
)

// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput
// Describes the spec for one promotion.
type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecInput struct {
	FreeTrialDuration          *GoogleCloudPaymentsResellerSubscriptionV1Duration                                 `json:"freeTrialDuration,omitempty"`
	IntroductoryPricingDetails *GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsInput `json:"introductoryPricingDetails,omitempty"`
	Promotion                  *string                                                                            `json:"promotion,omitempty"`
}

// GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec
// Describes the spec for one promotion.
type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec struct {
	FreeTrialDuration          *GoogleCloudPaymentsResellerSubscriptionV1Duration                            `json:"freeTrialDuration,omitempty"`
	IntroductoryPricingDetails *GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails `json:"introductoryPricingDetails,omitempty"`
	Promotion                  *string                                                                       `json:"promotion,omitempty"`
	Type                       *GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecTypeEnum   `json:"type,omitempty"`
}
