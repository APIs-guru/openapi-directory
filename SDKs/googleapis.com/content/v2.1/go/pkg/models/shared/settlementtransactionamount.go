package shared



type SettlementTransactionAmount struct {
    Commission *SettlementTransactionAmountCommission `json:"commission,omitempty"`
    Description *string `json:"description,omitempty"`
    TransactionAmount *Price `json:"transactionAmount,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

