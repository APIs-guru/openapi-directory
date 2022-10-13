package shared

type MovePlaylistItemRequestDto struct {
	NewIndex       *int32  `json:"NewIndex"`
	PlaylistItemID *string `json:"PlaylistItemId"`
}
