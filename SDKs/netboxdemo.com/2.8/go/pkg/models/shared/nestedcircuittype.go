package shared

type NestedCircuitType struct {
	CircuitCount *int64  `json:"circuit_count"`
	ID           *int64  `json:"id"`
	Name         string  `json:"name"`
	Slug         string  `json:"slug"`
	URL          *string `json:"url"`
}
