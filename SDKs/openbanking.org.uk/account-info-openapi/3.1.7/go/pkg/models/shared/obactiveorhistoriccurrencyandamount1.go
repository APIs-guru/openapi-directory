package shared

// ObActiveOrHistoricCurrencyAndAmount1
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObActiveOrHistoricCurrencyAndAmount1 struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}
