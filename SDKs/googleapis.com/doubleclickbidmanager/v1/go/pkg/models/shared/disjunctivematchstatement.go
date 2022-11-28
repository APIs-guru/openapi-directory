package shared

// DisjunctiveMatchStatement
// DisjunctiveMatchStatement that OR's all contained filters.
type DisjunctiveMatchStatement struct {
	EventFilters []EventFilter `json:"eventFilters,omitempty"`
}
