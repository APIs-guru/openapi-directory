package shared

type FloodlightConfigurationsListResponse struct {
	FloodlightConfigurations []FloodlightConfiguration `json:"floodlightConfigurations,omitempty"`
	Kind                     *string                   `json:"kind,omitempty"`
}
