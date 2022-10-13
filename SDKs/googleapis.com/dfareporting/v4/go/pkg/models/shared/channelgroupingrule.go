package shared

type ChannelGroupingRule struct {
	DisjunctiveMatchStatements []DisjunctiveMatchStatement `json:"disjunctiveMatchStatements"`
	Kind                       *string                     `json:"kind"`
	Name                       *string                     `json:"name"`
}
