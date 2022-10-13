package shared

type SettlementTransactionAmount struct {
	Commission        *SettlementTransactionAmountCommission `json:"commission"`
	Description       *string                                `json:"description"`
	TransactionAmount *Price                                 `json:"transactionAmount"`
	Type              *string                                `json:"type"`
}
