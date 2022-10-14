package shared

type PathReportCompatibleFields struct {
	ChannelGroupings []Dimension `json:"channelGroupings,omitempty"`
	Dimensions       []Dimension `json:"dimensions,omitempty"`
	Kind             *string     `json:"kind,omitempty"`
	Metrics          []Metric    `json:"metrics,omitempty"`
	PathFilters      []Dimension `json:"pathFilters,omitempty"`
}
