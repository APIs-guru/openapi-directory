package shared

type CrossDimensionReachReportCompatibleFields struct {
	Breakdown        []Dimension `json:"breakdown"`
	DimensionFilters []Dimension `json:"dimensionFilters"`
	Kind             *string     `json:"kind"`
	Metrics          []Metric    `json:"metrics"`
	OverlapMetrics   []Metric    `json:"overlapMetrics"`
}
