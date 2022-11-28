package shared

// SettlementReport
//
//	Settlement reports detail order-level and item-level credits and debits between you and Google.
type SettlementReport struct {
	EndDate         *string  `json:"endDate,omitempty"`
	Kind            *string  `json:"kind,omitempty"`
	PreviousBalance *Price   `json:"previousBalance,omitempty"`
	SettlementID    *string  `json:"settlementId,omitempty"`
	StartDate       *string  `json:"startDate,omitempty"`
	TransferAmount  *Price   `json:"transferAmount,omitempty"`
	TransferDate    *string  `json:"transferDate,omitempty"`
	TransferIds     []string `json:"transferIds,omitempty"`
}
