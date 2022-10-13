package shared

type ActivityContentDetailsPlaylistItem struct {
	PlaylistID     *string     `json:"playlistId"`
	PlaylistItemID *string     `json:"playlistItemId"`
	ResourceID     *ResourceID `json:"resourceId"`
}
