package shared

type APIPeriodUsageOut struct {
	BillingPeriod   *APIBillingPeriodUsageOut `json:"billingPeriod"`
	OverageCurrency *string                   `json:"overageCurrency"`
	OverageExclTax  *float64                  `json:"overageExclTax"`
	OverageInclTax  *float64                  `json:"overageInclTax"`
	OverageQuantity *int64                    `json:"overageQuantity"`
	Subscription    *APIPlanSubscriptionOut   `json:"subscription"`
}
