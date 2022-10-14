package shared

type CircuitType struct {
	CircuitCount *int64  `json:"circuit_count,omitempty"`
	Description  *string `json:"description,omitempty"`
	ID           *int64  `json:"id,omitempty"`
	Name         string  `json:"name"`
	Slug         string  `json:"slug"`
}
