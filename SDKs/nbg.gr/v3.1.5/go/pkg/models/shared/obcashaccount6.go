package shared

// ObCashAccount6
// Unambiguous identification of the account of the creditor, in the case of a debit transaction.
type ObCashAccount6 struct {
	Identification *string `json:"Identification,omitempty"`
	Name           *string `json:"Name,omitempty"`
	SchemeName     *string `json:"SchemeName,omitempty"`
}
