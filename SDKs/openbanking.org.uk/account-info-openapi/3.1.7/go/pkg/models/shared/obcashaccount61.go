package shared

// ObCashAccount61
// Unambiguous identification of the account of the debtor, in the case of a crebit transaction.
type ObCashAccount61 struct {
	Identification          *string `json:"Identification,omitempty"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              *string `json:"SchemeName,omitempty"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}
