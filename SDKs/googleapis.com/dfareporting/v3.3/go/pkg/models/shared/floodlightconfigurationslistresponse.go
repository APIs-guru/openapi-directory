package shared

// FloodlightConfigurationsListResponse
// Floodlight Configuration List Response
type FloodlightConfigurationsListResponse struct {
	FloodlightConfigurations []FloodlightConfiguration `json:"floodlightConfigurations,omitempty"`
	Kind                     *string                   `json:"kind,omitempty"`
}
