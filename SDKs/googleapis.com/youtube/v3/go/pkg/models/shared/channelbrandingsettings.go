package shared

type ChannelBrandingSettings struct {
	Channel *ChannelSettings `json:"channel,omitempty"`
	Hints   []PropertyValue  `json:"hints,omitempty"`
	Image   *ImageSettings   `json:"image,omitempty"`
	Watch   *WatchSettings   `json:"watch,omitempty"`
}
