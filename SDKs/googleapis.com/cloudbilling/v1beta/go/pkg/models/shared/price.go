package shared

// Price
// The price of a SKU at a point int time.
type Price struct {
	EffectiveTime *EstimationTimePoint `json:"effectiveTime,omitempty"`
	PriceType     *string              `json:"priceType,omitempty"`
	Rate          *Rate                `json:"rate,omitempty"`
}
