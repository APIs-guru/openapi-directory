package shared

// MoveItemRequest
// Move an item in a form.
type MoveItemRequest struct {
	NewLocation      *Location `json:"newLocation,omitempty"`
	OriginalLocation *Location `json:"originalLocation,omitempty"`
}
