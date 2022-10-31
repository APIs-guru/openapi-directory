package shared

type ProductSubscriptionCost struct {
	Amount       *Price  `json:"amount,omitempty"`
	Period       *string `json:"period,omitempty"`
	PeriodLength *string `json:"periodLength,omitempty"`
}
