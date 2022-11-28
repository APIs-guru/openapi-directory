package shared

// PricingExpression
// Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage.
type PricingExpression struct {
	BaseUnit                 *string    `json:"baseUnit,omitempty"`
	BaseUnitConversionFactor *float64   `json:"baseUnitConversionFactor,omitempty"`
	BaseUnitDescription      *string    `json:"baseUnitDescription,omitempty"`
	DisplayQuantity          *float64   `json:"displayQuantity,omitempty"`
	TieredRates              []TierRate `json:"tieredRates,omitempty"`
	UsageUnit                *string    `json:"usageUnit,omitempty"`
	UsageUnitDescription     *string    `json:"usageUnitDescription,omitempty"`
}
