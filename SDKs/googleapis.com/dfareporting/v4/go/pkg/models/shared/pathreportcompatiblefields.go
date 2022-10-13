package shared

type PathReportCompatibleFields struct {
	ChannelGroupings []Dimension `json:"channelGroupings"`
	Dimensions       []Dimension `json:"dimensions"`
	Kind             *string     `json:"kind"`
	Metrics          []Metric    `json:"metrics"`
	PathFilters      []Dimension `json:"pathFilters"`
}
