package shared

// PathQueryOptions
// Path Query Options for Report Options.
type PathQueryOptions struct {
	ChannelGrouping *ChannelGrouping `json:"channelGrouping,omitempty"`
	PathFilters     []PathFilter     `json:"pathFilters,omitempty"`
}
