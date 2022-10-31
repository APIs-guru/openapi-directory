package shared

type Rule struct {
	DisjunctiveMatchStatements []DisjunctiveMatchStatement `json:"disjunctiveMatchStatements,omitempty"`
	Name                       *string                     `json:"name,omitempty"`
}
