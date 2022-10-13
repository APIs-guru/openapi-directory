package shared

type ObReadBeneficiary5Data struct {
	Beneficiary []ObBeneficiary5 `json:"Beneficiary"`
}

type ObReadBeneficiary5 struct {
	Data  ObReadBeneficiary5Data `json:"Data"`
	Links *Links                 `json:"Links"`
	Meta  *Meta                  `json:"Meta"`
}
