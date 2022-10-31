package shared

type ObBeneficiary5 struct {
	AccountID       *string                     `json:"AccountId,omitempty"`
	BeneficiaryType *ObBeneficiaryType1CodeEnum `json:"BeneficiaryType,omitempty"`
	CreditorAccount *ObCashAccount5             `json:"CreditorAccount,omitempty"`
}
