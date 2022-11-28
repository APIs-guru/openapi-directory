package shared

// ObCashAccount60
// Unambiguous identification of the account of the creditor, in the case of a debit transaction.
type ObCashAccount60 struct {
	Identification          *string `json:"Identification,omitempty"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              *string `json:"SchemeName,omitempty"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}
