package shared

type ObReadBeneficiary5Data struct {
	Beneficiary []ObBeneficiary5 `json:"Beneficiary,omitempty"`
}

type ObReadBeneficiary5 struct {
	Data  ObReadBeneficiary5Data `json:"Data"`
	Links *Links                 `json:"Links,omitempty"`
	Meta  *Meta                  `json:"Meta,omitempty"`
}
