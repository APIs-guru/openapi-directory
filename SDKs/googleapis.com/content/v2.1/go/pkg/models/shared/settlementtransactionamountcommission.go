package shared

type SettlementTransactionAmountCommission struct {
	Category *string `json:"category,omitempty"`
	Rate     *string `json:"rate,omitempty"`
}
