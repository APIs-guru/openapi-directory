package shared

// ListPopulationClause
// A group clause made up of list population terms representing constraints joined by ORs.
type ListPopulationClause struct {
	Terms []ListPopulationTerm `json:"terms,omitempty"`
}
