package shared

type ObReadConsentResponse1 struct {
	Data  ObReadDataConsentResponse1 `json:"Data"`
	Links Links                      `json:"Links"`
	Meta  Meta                       `json:"Meta"`
	Risk  map[string]interface{}     `json:"Risk"`
}
