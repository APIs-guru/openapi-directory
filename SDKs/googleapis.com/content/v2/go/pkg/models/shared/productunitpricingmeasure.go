package shared

type ProductUnitPricingMeasure struct {
	Unit  *string  `json:"unit,omitempty"`
	Value *float64 `json:"value,omitempty"`
}
