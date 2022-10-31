package shared

type ObReadAccount6Data struct {
	Account []ObAccount6 `json:"Account,omitempty"`
}

type ObReadAccount6 struct {
	Data  ObReadAccount6Data `json:"Data"`
	Links *Links             `json:"Links,omitempty"`
	Meta  *Meta              `json:"Meta,omitempty"`
}
