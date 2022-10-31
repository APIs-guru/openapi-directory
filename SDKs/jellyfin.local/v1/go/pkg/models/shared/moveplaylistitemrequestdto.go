package shared

type MovePlaylistItemRequestDto struct {
	NewIndex       *int32  `json:"NewIndex,omitempty"`
	PlaylistItemID *string `json:"PlaylistItemId,omitempty"`
}
