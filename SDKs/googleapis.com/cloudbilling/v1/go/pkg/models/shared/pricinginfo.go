package shared

type PricingInfo struct {
	AggregationInfo        *AggregationInfo   `json:"aggregationInfo"`
	CurrencyConversionRate *float64           `json:"currencyConversionRate"`
	EffectiveTime          *string            `json:"effectiveTime"`
	PricingExpression      *PricingExpression `json:"pricingExpression"`
	Summary                *string            `json:"summary"`
}
