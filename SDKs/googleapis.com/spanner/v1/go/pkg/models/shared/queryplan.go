package shared

// QueryPlan
// Contains an ordered list of nodes appearing in the query plan.
type QueryPlan struct {
	PlanNodes []PlanNode `json:"planNodes,omitempty"`
}
