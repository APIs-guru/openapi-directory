package shared

type ObReadBeneficiary5 struct {
	Data  ObReadDataBeneficiary5 `json:"Data"`
	Links *Links                 `json:"Links,omitempty"`
	Meta  *Meta                  `json:"Meta,omitempty"`
}
