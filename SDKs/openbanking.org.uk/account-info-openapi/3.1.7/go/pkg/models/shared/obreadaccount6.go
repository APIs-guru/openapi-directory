package shared

type ObReadAccount6Data struct {
	Account []ObAccount6 `json:"Account"`
}

type ObReadAccount6 struct {
	Data  ObReadAccount6Data `json:"Data"`
	Links *Links             `json:"Links"`
	Meta  *Meta              `json:"Meta"`
}
