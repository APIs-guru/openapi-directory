package shared

type ChannelMappingOptionsDto struct {
	Mappings         []NameValuePair       `json:"Mappings"`
	ProviderChannels []NameIDPair          `json:"ProviderChannels"`
	ProviderName     *string               `json:"ProviderName"`
	TunerChannels    []TunerChannelMapping `json:"TunerChannels"`
}
