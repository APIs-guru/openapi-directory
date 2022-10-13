package shared

type RequiredActionProviderRepresentation struct {
	Alias         *string                `json:"alias"`
	Config        map[string]interface{} `json:"config"`
	DefaultAction *bool                  `json:"defaultAction"`
	Enabled       *bool                  `json:"enabled"`
	Name          *string                `json:"name"`
	Priority      *int32                 `json:"priority"`
	ProviderID    *string                `json:"providerId"`
}
