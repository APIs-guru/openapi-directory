package shared

type DisjunctiveMatchStatement struct {
	EventFilters []EventFilter `json:"eventFilters"`
	Kind         *string       `json:"kind"`
}
