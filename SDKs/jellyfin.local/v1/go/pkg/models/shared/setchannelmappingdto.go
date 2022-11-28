package shared

// SetChannelMappingDto
// Set channel mapping dto.
type SetChannelMappingDto struct {
	ProviderChannelID string `json:"ProviderChannelId"`
	ProviderID        string `json:"ProviderId"`
	TunerChannelID    string `json:"TunerChannelId"`
}
