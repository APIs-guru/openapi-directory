package shared

// MergeConflict
// Represents a merge conflict.
type MergeConflict struct {
	EntityInBaseVersion *Entity `json:"entityInBaseVersion,omitempty"`
	EntityInWorkspace   *Entity `json:"entityInWorkspace,omitempty"`
}
