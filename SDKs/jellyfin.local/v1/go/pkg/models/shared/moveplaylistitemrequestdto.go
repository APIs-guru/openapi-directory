package shared

// MovePlaylistItemRequestDto
// Class MovePlaylistItemRequestDto.
type MovePlaylistItemRequestDto struct {
	NewIndex       *int32  `json:"NewIndex,omitempty"`
	PlaylistItemID *string `json:"PlaylistItemId,omitempty"`
}
