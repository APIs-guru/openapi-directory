package shared

// DebtorAgent7Ch
// Reference to an debtorAgent by either
//   - BIC, of the debtor bank, or
//   - IID, of the debtor bank
//
// adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH_BicOrClrId
type DebtorAgent7Ch struct {
	Bic *string                       `json:"bic,omitempty"`
	Iid *InstitutionalIdentification2 `json:"iid,omitempty"`
}
