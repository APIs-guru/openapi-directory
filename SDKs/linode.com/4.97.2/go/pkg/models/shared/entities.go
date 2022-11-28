package shared

// Entities
// A collection of the entities to include in this transfer request, separated by type.
type Entities struct {
	Linodes []int64 `json:"linodes,omitempty"`
}
