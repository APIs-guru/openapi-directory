package shared

type ChannelBrandingSettings struct {
	Channel *ChannelSettings `json:"channel"`
	Hints   []PropertyValue  `json:"hints"`
	Image   *ImageSettings   `json:"image"`
	Watch   *WatchSettings   `json:"watch"`
}
