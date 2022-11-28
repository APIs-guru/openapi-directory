package shared

// ChannelGrouping
// A channel grouping defines a set of rules that can be used to categorize events in a path report.
type ChannelGrouping struct {
	FallbackName *string `json:"fallbackName,omitempty"`
	Name         *string `json:"name,omitempty"`
	Rules        []Rule  `json:"rules,omitempty"`
}
