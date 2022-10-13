package shared

type ProductSubscriptionCost struct {
	Amount       *Price  `json:"amount"`
	Period       *string `json:"period"`
	PeriodLength *string `json:"periodLength"`
}
