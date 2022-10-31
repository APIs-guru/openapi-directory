package shared



type SettlementTransaction struct {
    Amount *SettlementTransactionAmount `json:"amount,omitempty"`
    Identifiers *SettlementTransactionIdentifiers `json:"identifiers,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Transaction *SettlementTransactionTransaction `json:"transaction,omitempty"`
    
}

