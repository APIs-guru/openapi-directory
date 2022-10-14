package shared

type PricingInfo struct {
	AggregationInfo        *AggregationInfo   `json:"aggregationInfo,omitempty"`
	CurrencyConversionRate *float64           `json:"currencyConversionRate,omitempty"`
	EffectiveTime          *string            `json:"effectiveTime,omitempty"`
	PricingExpression      *PricingExpression `json:"pricingExpression,omitempty"`
	Summary                *string            `json:"summary,omitempty"`
}
