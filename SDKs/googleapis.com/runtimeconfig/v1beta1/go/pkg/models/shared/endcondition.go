package shared

// EndCondition
// The condition that a Waiter resource is waiting for.
type EndCondition struct {
	Cardinality *Cardinality `json:"cardinality,omitempty"`
}
