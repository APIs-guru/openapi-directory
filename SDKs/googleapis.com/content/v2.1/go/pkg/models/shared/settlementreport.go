package shared

type SettlementReport struct {
	EndDate         *string  `json:"endDate"`
	Kind            *string  `json:"kind"`
	PreviousBalance *Price   `json:"previousBalance"`
	SettlementID    *string  `json:"settlementId"`
	StartDate       *string  `json:"startDate"`
	TransferAmount  *Price   `json:"transferAmount"`
	TransferDate    *string  `json:"transferDate"`
	TransferIds     []string `json:"transferIds"`
}
