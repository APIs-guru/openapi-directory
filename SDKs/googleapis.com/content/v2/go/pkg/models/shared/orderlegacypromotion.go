package shared

type OrderLegacyPromotion struct {
	Benefits              []OrderLegacyPromotionBenefit `json:"benefits,omitempty"`
	EffectiveDates        *string                       `json:"effectiveDates,omitempty"`
	GenericRedemptionCode *string                       `json:"genericRedemptionCode,omitempty"`
	ID                    *string                       `json:"id,omitempty"`
	LongTitle             *string                       `json:"longTitle,omitempty"`
	ProductApplicability  *string                       `json:"productApplicability,omitempty"`
	RedemptionChannel     *string                       `json:"redemptionChannel,omitempty"`
}
