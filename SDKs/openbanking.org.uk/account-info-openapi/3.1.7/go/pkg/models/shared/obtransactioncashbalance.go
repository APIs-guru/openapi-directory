package shared

// ObTransactionCashBalanceAmount
// Amount of money of the cash balance after a transaction entry is applied to the account..
type ObTransactionCashBalanceAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObTransactionCashBalance
// Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
type ObTransactionCashBalance struct {
	Amount               ObTransactionCashBalanceAmount `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCode2Enum         `json:"CreditDebitIndicator"`
	Type                 ObBalanceType1CodeEnum         `json:"Type"`
}
