package shared

// DisjunctiveMatchStatement
// Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
type DisjunctiveMatchStatement struct {
	EventFilters []EventFilter `json:"eventFilters,omitempty"`
	Kind         *string       `json:"kind,omitempty"`
}
