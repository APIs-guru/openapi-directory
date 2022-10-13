package shared

type ObBeneficiary5 struct {
	AccountID       *string                     `json:"AccountId"`
	BeneficiaryType *ObBeneficiaryType1CodeEnum `json:"BeneficiaryType"`
	CreditorAccount *ObCashAccount5             `json:"CreditorAccount"`
}
