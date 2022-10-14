package shared

type MergeConflict struct {
	EntityInBaseVersion *Entity `json:"entityInBaseVersion,omitempty"`
	EntityInWorkspace   *Entity `json:"entityInWorkspace,omitempty"`
}
