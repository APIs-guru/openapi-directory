package shared



type APIBillingPeriodUsageOut struct {
    APIKey *string `json:"apiKey,omitempty"`
    BillingStatus *string `json:"billingStatus,omitempty"`
    HardLimit *int64 `json:"hardLimit,omitempty"`
    PeriodEnded *int64 `json:"periodEnded,omitempty"`
    PeriodStarted *int64 `json:"periodStarted,omitempty"`
    SoftLimit *int64 `json:"softLimit,omitempty"`
    StripeCurrentPeriodEnd *int64 `json:"stripeCurrentPeriodEnd,omitempty"`
    StripeCurrentPeriodStart *int64 `json:"stripeCurrentPeriodStart,omitempty"`
    SubscriptionStarted *int64 `json:"subscriptionStarted,omitempty"`
    Usage *int64 `json:"usage,omitempty"`
    
}

