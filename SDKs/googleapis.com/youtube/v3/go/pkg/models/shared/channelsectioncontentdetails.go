package shared

// ChannelSectionContentDetails
// Details about a channelsection, including playlists and channels.
type ChannelSectionContentDetails struct {
	Channels  []string `json:"channels,omitempty"`
	Playlists []string `json:"playlists,omitempty"`
}
