package shared

// Rule
// A Rule defines a name, and a boolean expression in [conjunctive normal form] (http://mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be applied to a path event to determine if that name should be applied.
type Rule struct {
	DisjunctiveMatchStatements []DisjunctiveMatchStatement `json:"disjunctiveMatchStatements,omitempty"`
	Name                       *string                     `json:"name,omitempty"`
}
