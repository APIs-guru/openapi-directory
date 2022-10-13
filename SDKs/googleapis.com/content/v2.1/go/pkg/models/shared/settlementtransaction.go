package shared

type SettlementTransaction struct {
	Amount      *SettlementTransactionAmount      `json:"amount"`
	Identifiers *SettlementTransactionIdentifiers `json:"identifiers"`
	Kind        *string                           `json:"kind"`
	Transaction *SettlementTransactionTransaction `json:"transaction"`
}
