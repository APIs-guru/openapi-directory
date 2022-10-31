package shared



type APIPeriodUsageOut struct {
    BillingPeriod *APIBillingPeriodUsageOut `json:"billingPeriod,omitempty"`
    OverageCurrency *string `json:"overageCurrency,omitempty"`
    OverageExclTax *float64 `json:"overageExclTax,omitempty"`
    OverageInclTax *float64 `json:"overageInclTax,omitempty"`
    OverageQuantity *int64 `json:"overageQuantity,omitempty"`
    Subscription *APIPlanSubscriptionOut `json:"subscription,omitempty"`
    
}

