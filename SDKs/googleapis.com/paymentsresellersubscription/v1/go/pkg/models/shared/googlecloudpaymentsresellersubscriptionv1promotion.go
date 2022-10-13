package shared

type GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum string

const (
	GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnumPromotionTypeUnspecified         GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum = "PROMOTION_TYPE_UNSPECIFIED"
	GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnumPromotionTypeFreeTrial           GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum = "PROMOTION_TYPE_FREE_TRIAL"
	GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnumPromotionTypeIntroductoryPricing GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum = "PROMOTION_TYPE_INTRODUCTORY_PRICING"
)

type GoogleCloudPaymentsResellerSubscriptionV1Promotion struct {
	ApplicableProducts         []string                                                                      `json:"applicableProducts"`
	EndTime                    *string                                                                       `json:"endTime"`
	FreeTrialDuration          *GoogleCloudPaymentsResellerSubscriptionV1Duration                            `json:"freeTrialDuration"`
	IntroductoryPricingDetails *GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails `json:"introductoryPricingDetails"`
	Name                       *string                                                                       `json:"name"`
	PromotionType              *GoogleCloudPaymentsResellerSubscriptionV1PromotionPromotionTypeEnum          `json:"promotionType"`
	RegionCodes                []string                                                                      `json:"regionCodes"`
	StartTime                  *string                                                                       `json:"startTime"`
	Titles                     []GoogleTypeLocalizedText                                                     `json:"titles"`
}
