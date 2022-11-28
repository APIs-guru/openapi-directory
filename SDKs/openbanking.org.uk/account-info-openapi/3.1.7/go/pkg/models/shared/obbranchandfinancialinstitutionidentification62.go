package shared

// ObBranchAndFinancialInstitutionIdentification62
// Financial institution servicing an account for the debtor.
type ObBranchAndFinancialInstitutionIdentification62 struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}
