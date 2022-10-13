package shared

type OrderLegacyPromotion struct {
	Benefits              []OrderLegacyPromotionBenefit `json:"benefits"`
	EffectiveDates        *string                       `json:"effectiveDates"`
	GenericRedemptionCode *string                       `json:"genericRedemptionCode"`
	ID                    *string                       `json:"id"`
	LongTitle             *string                       `json:"longTitle"`
	ProductApplicability  *string                       `json:"productApplicability"`
	RedemptionChannel     *string                       `json:"redemptionChannel"`
}
