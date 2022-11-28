package shared

// ResourceID
// A resource id is a generic reference that points to another YouTube resource.
type ResourceID struct {
	ChannelID  *string `json:"channelId,omitempty"`
	Kind       *string `json:"kind,omitempty"`
	PlaylistID *string `json:"playlistId,omitempty"`
	VideoID    *string `json:"videoId,omitempty"`
}
