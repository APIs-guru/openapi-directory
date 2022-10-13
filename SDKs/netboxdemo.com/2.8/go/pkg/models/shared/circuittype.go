package shared

type CircuitType struct {
	CircuitCount *int64  `json:"circuit_count"`
	Description  *string `json:"description"`
	ID           *int64  `json:"id"`
	Name         string  `json:"name"`
	Slug         string  `json:"slug"`
}
