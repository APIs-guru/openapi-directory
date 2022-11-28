package shared

// ChannelSectionTargeting
// ChannelSection targeting setting.
type ChannelSectionTargeting struct {
	Countries []string `json:"countries,omitempty"`
	Languages []string `json:"languages,omitempty"`
	Regions   []string `json:"regions,omitempty"`
}
