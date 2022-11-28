package shared

// Label
// A label to apply to this replica pool.
type Label struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
