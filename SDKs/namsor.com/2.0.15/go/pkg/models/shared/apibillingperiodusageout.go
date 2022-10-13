package shared

type APIBillingPeriodUsageOut struct {
	APIKey                   *string `json:"apiKey"`
	BillingStatus            *string `json:"billingStatus"`
	HardLimit                *int64  `json:"hardLimit"`
	PeriodEnded              *int64  `json:"periodEnded"`
	PeriodStarted            *int64  `json:"periodStarted"`
	SoftLimit                *int64  `json:"softLimit"`
	StripeCurrentPeriodEnd   *int64  `json:"stripeCurrentPeriodEnd"`
	StripeCurrentPeriodStart *int64  `json:"stripeCurrentPeriodStart"`
	SubscriptionStarted      *int64  `json:"subscriptionStarted"`
	Usage                    *int64  `json:"usage"`
}
