package shared

type Rule struct {
	DisjunctiveMatchStatements []DisjunctiveMatchStatement `json:"disjunctiveMatchStatements"`
	Name                       *string                     `json:"name"`
}
