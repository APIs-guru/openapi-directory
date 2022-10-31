package shared

type ObBeneficiary5 struct {
	AccountID         *string                                          `json:"AccountId,omitempty"`
	BeneficiaryID     *string                                          `json:"BeneficiaryId,omitempty"`
	BeneficiaryType   *ObBeneficiaryType1CodeEnum                      `json:"BeneficiaryType,omitempty"`
	CreditorAccount   *ObCashAccount50                                 `json:"CreditorAccount,omitempty"`
	CreditorAgent     *ObBranchAndFinancialInstitutionIdentification60 `json:"CreditorAgent,omitempty"`
	Reference         *string                                          `json:"Reference,omitempty"`
	SupplementaryData map[string]interface{}                           `json:"SupplementaryData,omitempty"`
}
