package shared

// ActivityContentDetailsPlaylistItem
// Information about a new playlist item.
type ActivityContentDetailsPlaylistItem struct {
	PlaylistID     *string     `json:"playlistId,omitempty"`
	PlaylistItemID *string     `json:"playlistItemId,omitempty"`
	ResourceID     *ResourceID `json:"resourceId,omitempty"`
}
