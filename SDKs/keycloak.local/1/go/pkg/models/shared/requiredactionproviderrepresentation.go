package shared

type RequiredActionProviderRepresentation struct {
	Alias         *string                `json:"alias,omitempty"`
	Config        map[string]interface{} `json:"config,omitempty"`
	DefaultAction *bool                  `json:"defaultAction,omitempty"`
	Enabled       *bool                  `json:"enabled,omitempty"`
	Name          *string                `json:"name,omitempty"`
	Priority      *int32                 `json:"priority,omitempty"`
	ProviderID    *string                `json:"providerId,omitempty"`
}
