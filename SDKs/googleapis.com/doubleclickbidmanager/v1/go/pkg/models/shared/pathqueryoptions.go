package shared

type PathQueryOptions struct {
	ChannelGrouping *ChannelGrouping `json:"channelGrouping"`
	PathFilters     []PathFilter     `json:"pathFilters"`
}
