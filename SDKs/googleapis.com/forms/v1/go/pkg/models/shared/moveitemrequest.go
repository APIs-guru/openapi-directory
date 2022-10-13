package shared

type MoveItemRequest struct {
	NewLocation      *Location `json:"newLocation"`
	OriginalLocation *Location `json:"originalLocation"`
}
