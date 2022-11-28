package shared

// ChannelMappingOptionsDto
// Channel mapping options dto.
type ChannelMappingOptionsDto struct {
	Mappings         []NameValuePair       `json:"Mappings,omitempty"`
	ProviderChannels []NameIDPair          `json:"ProviderChannels,omitempty"`
	ProviderName     *string               `json:"ProviderName,omitempty"`
	TunerChannels    []TunerChannelMapping `json:"TunerChannels,omitempty"`
}
