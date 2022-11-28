package shared

// ChannelBrandingSettings
// Branding properties of a YouTube channel.
type ChannelBrandingSettings struct {
	Channel *ChannelSettings `json:"channel,omitempty"`
	Hints   []PropertyValue  `json:"hints,omitempty"`
	Image   *ImageSettings   `json:"image,omitempty"`
	Watch   *WatchSettings   `json:"watch,omitempty"`
}
