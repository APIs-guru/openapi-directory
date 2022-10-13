package shared

type PricingExpression struct {
	BaseUnit                 *string    `json:"baseUnit"`
	BaseUnitConversionFactor *float64   `json:"baseUnitConversionFactor"`
	BaseUnitDescription      *string    `json:"baseUnitDescription"`
	DisplayQuantity          *float64   `json:"displayQuantity"`
	TieredRates              []TierRate `json:"tieredRates"`
	UsageUnit                *string    `json:"usageUnit"`
	UsageUnitDescription     *string    `json:"usageUnitDescription"`
}
