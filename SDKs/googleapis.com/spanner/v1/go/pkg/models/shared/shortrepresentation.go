package shared

// ShortRepresentation
// Condensed representation of a node and its subtree. Only present for `SCALAR` PlanNode(s).
type ShortRepresentation struct {
	Description *string          `json:"description,omitempty"`
	Subqueries  map[string]int32 `json:"subqueries,omitempty"`
}
