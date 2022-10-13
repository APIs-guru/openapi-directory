package shared

type APIPlanSubscriptionOut struct {
	APIKey             *string  `json:"apiKey"`
	Currency           *string  `json:"currency"`
	CurrencyFactor     *float64 `json:"currencyFactor"`
	PlanBaseFeesKey    *string  `json:"planBaseFeesKey"`
	PlanEnded          *int64   `json:"planEnded"`
	PlanName           *string  `json:"planName"`
	PlanQuota          *int64   `json:"planQuota"`
	PlanStarted        *int64   `json:"planStarted"`
	PlanStatus         *string  `json:"planStatus"`
	Price              *float64 `json:"price"`
	PriceOverage       *float64 `json:"priceOverage"`
	PriceOverageUsd    *float64 `json:"priceOverageUSD"`
	PriceUsd           *float64 `json:"priceUSD"`
	PriorPlanStarted   *int64   `json:"priorPlanStarted"`
	StripeCustomerID   *string  `json:"stripeCustomerId"`
	StripeStatus       *string  `json:"stripeStatus"`
	StripeSubscription *string  `json:"stripeSubscription"`
	TaxRate            *float64 `json:"taxRate"`
	UserID             *string  `json:"userId"`
}
