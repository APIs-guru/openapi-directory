package shared

// CreditorAgent7Ch
// Reference to an creditorAgent by either
//   - BIC, of the creditor bank, or
//   - IID, of the creditor bank, or
//   - IID and optional name and address of the creditor bank or
//   - Name and address of the creditor bank
//
// adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH
type CreditorAgent7Ch struct {
	Address *PostalAddress6Ch             `json:"address,omitempty"`
	Bic     *string                       `json:"bic,omitempty"`
	Iid     *InstitutionalIdentification2 `json:"iid,omitempty"`
	Name    *string                       `json:"name,omitempty"`
}
