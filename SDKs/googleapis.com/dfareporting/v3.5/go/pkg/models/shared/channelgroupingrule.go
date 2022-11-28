package shared

// ChannelGroupingRule
// Represents a DfaReporting channel grouping rule.
type ChannelGroupingRule struct {
	DisjunctiveMatchStatements []DisjunctiveMatchStatement `json:"disjunctiveMatchStatements,omitempty"`
	Kind                       *string                     `json:"kind,omitempty"`
	Name                       *string                     `json:"name,omitempty"`
}
