package shared

// ObFundsConfirmation1DataInstructedAmount
// Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
type ObFundsConfirmation1DataInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObFundsConfirmation1Data struct {
	ConsentID        string                                   `json:"ConsentId"`
	InstructedAmount ObFundsConfirmation1DataInstructedAmount `json:"InstructedAmount"`
	Reference        string                                   `json:"Reference"`
}

type ObFundsConfirmation1 struct {
	Data ObFundsConfirmation1Data `json:"Data"`
}
