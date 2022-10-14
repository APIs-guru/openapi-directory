package shared

type CircuitType struct {
	ID   *int64 `json:"id,omitempty"`
	Name string `json:"name"`
	Slug string `json:"slug"`
}
