package shared

type Price struct {
	EffectiveTime *EstimationTimePoint `json:"effectiveTime,omitempty"`
	PriceType     *string              `json:"priceType,omitempty"`
	Rate          *Rate                `json:"rate,omitempty"`
}
