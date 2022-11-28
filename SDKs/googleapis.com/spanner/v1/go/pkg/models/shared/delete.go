package shared

// Delete
// Arguments to delete operations.
type Delete struct {
	KeySet *KeySet `json:"keySet,omitempty"`
	Table  *string `json:"table,omitempty"`
}
