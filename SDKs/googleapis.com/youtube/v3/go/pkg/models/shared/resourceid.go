package shared

type ResourceID struct {
	ChannelID  *string `json:"channelId"`
	Kind       *string `json:"kind"`
	PlaylistID *string `json:"playlistId"`
	VideoID    *string `json:"videoId"`
}
