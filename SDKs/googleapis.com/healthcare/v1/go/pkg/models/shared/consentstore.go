package shared

type ConsentStore struct {
	DefaultConsentTTL           *string           `json:"defaultConsentTtl"`
	EnableConsentCreateOnUpdate *bool             `json:"enableConsentCreateOnUpdate"`
	Labels                      map[string]string `json:"labels"`
	Name                        *string           `json:"name"`
}
