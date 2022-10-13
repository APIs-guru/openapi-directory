package shared

type ObBeneficiary5 struct {
	AccountID         *string                                          `json:"AccountId"`
	BeneficiaryID     *string                                          `json:"BeneficiaryId"`
	BeneficiaryType   *ObBeneficiaryType1CodeEnum                      `json:"BeneficiaryType"`
	CreditorAccount   *ObCashAccount50                                 `json:"CreditorAccount"`
	CreditorAgent     *ObBranchAndFinancialInstitutionIdentification60 `json:"CreditorAgent"`
	Reference         *string                                          `json:"Reference"`
	SupplementaryData map[string]interface{}                           `json:"SupplementaryData"`
}
