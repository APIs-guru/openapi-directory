package shared

// ChannelGrouping
// Represents a DfaReporting channel grouping.
type ChannelGrouping struct {
	FallbackName *string               `json:"fallbackName,omitempty"`
	Kind         *string               `json:"kind,omitempty"`
	Name         *string               `json:"name,omitempty"`
	Rules        []ChannelGroupingRule `json:"rules,omitempty"`
}
