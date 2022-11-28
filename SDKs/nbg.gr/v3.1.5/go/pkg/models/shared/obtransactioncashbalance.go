package shared

// ObTransactionCashBalance
// Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
type ObTransactionCashBalance struct {
	Amount               ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCodeEnum               `json:"CreditDebitIndicator"`
	Type                 ObBalanceType1CodeEnum              `json:"Type"`
}
