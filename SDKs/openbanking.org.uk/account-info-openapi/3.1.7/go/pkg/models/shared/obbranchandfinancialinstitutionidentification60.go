package shared

// ObBranchAndFinancialInstitutionIdentification60
// Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
// This is the servicer of the beneficiary account.
type ObBranchAndFinancialInstitutionIdentification60 struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}
