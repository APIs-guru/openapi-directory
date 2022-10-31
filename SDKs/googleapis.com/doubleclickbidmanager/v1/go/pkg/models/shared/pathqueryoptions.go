package shared



type PathQueryOptions struct {
    ChannelGrouping *ChannelGrouping `json:"channelGrouping,omitempty"`
    PathFilters []PathFilter `json:"pathFilters,omitempty"`
    
}

