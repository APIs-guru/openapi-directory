package shared

type MergeConflict struct {
	EntityInBaseVersion *Entity `json:"entityInBaseVersion"`
	EntityInWorkspace   *Entity `json:"entityInWorkspace"`
}
