package shared

type APIPlanSubscriptionOut struct {
	APIKey             *string  `json:"apiKey,omitempty"`
	Currency           *string  `json:"currency,omitempty"`
	CurrencyFactor     *float64 `json:"currencyFactor,omitempty"`
	PlanBaseFeesKey    *string  `json:"planBaseFeesKey,omitempty"`
	PlanEnded          *int64   `json:"planEnded,omitempty"`
	PlanName           *string  `json:"planName,omitempty"`
	PlanQuota          *int64   `json:"planQuota,omitempty"`
	PlanStarted        *int64   `json:"planStarted,omitempty"`
	PlanStatus         *string  `json:"planStatus,omitempty"`
	Price              *float64 `json:"price,omitempty"`
	PriceOverage       *float64 `json:"priceOverage,omitempty"`
	PriceOverageUsd    *float64 `json:"priceOverageUSD,omitempty"`
	PriceUsd           *float64 `json:"priceUSD,omitempty"`
	PriorPlanStarted   *int64   `json:"priorPlanStarted,omitempty"`
	StripeCustomerID   *string  `json:"stripeCustomerId,omitempty"`
	StripeStatus       *string  `json:"stripeStatus,omitempty"`
	StripeSubscription *string  `json:"stripeSubscription,omitempty"`
	TaxRate            *float64 `json:"taxRate,omitempty"`
	UserID             *string  `json:"userId,omitempty"`
}
