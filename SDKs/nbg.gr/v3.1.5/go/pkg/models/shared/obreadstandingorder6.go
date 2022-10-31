package shared

type ObReadStandingOrder6 struct {
	Data  ObReadDataStandingOrder5 `json:"Data"`
	Links *Links                   `json:"Links,omitempty"`
	Meta  *Meta                    `json:"Meta,omitempty"`
}
