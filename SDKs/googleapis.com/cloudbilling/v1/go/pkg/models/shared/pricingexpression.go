package shared

type PricingExpression struct {
	BaseUnit                 *string    `json:"baseUnit,omitempty"`
	BaseUnitConversionFactor *float64   `json:"baseUnitConversionFactor,omitempty"`
	BaseUnitDescription      *string    `json:"baseUnitDescription,omitempty"`
	DisplayQuantity          *float64   `json:"displayQuantity,omitempty"`
	TieredRates              []TierRate `json:"tieredRates,omitempty"`
	UsageUnit                *string    `json:"usageUnit,omitempty"`
	UsageUnitDescription     *string    `json:"usageUnitDescription,omitempty"`
}
