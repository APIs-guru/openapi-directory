package shared

type ObReadStandingOrder6Data struct {
	StandingOrder []ObStandingOrder6 `json:"StandingOrder,omitempty"`
}

type ObReadStandingOrder6 struct {
	Data  ObReadStandingOrder6Data `json:"Data"`
	Links *Links                   `json:"Links,omitempty"`
	Meta  *Meta                    `json:"Meta,omitempty"`
}
