package shared

type ObReadStatement2 struct {
	Data  ObReadDataStatement2 `json:"Data"`
	Links *Links               `json:"Links"`
	Meta  *Meta                `json:"Meta"`
}
