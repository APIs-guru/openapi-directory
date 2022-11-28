package shared

// ObCashAccount50
// Provides the details to identify the beneficiary account.
type ObCashAccount50 struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}
