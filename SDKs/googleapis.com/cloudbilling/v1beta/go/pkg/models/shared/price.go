package shared

type Price struct {
	EffectiveTime *EstimationTimePoint `json:"effectiveTime"`
	PriceType     *string              `json:"priceType"`
	Rate          *Rate                `json:"rate"`
}
