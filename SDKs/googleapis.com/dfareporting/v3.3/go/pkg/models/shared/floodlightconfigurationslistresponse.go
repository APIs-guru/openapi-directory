package shared

type FloodlightConfigurationsListResponse struct {
	FloodlightConfigurations []FloodlightConfiguration `json:"floodlightConfigurations"`
	Kind                     *string                   `json:"kind"`
}
