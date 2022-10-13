package shared

type ObReadStandingOrder6Data struct {
	StandingOrder []ObStandingOrder6 `json:"StandingOrder"`
}

type ObReadStandingOrder6 struct {
	Data  ObReadStandingOrder6Data `json:"Data"`
	Links *Links                   `json:"Links"`
	Meta  *Meta                    `json:"Meta"`
}
