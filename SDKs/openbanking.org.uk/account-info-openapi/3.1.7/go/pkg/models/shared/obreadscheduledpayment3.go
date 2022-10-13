package shared

type ObReadScheduledPayment3Data struct {
	ScheduledPayment []ObScheduledPayment3 `json:"ScheduledPayment"`
}

type ObReadScheduledPayment3 struct {
	Data  ObReadScheduledPayment3Data `json:"Data"`
	Links *Links                      `json:"Links"`
	Meta  *Meta                       `json:"Meta"`
}
