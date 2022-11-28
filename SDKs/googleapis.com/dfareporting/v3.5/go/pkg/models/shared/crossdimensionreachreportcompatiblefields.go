package shared

// CrossDimensionReachReportCompatibleFields
// Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
type CrossDimensionReachReportCompatibleFields struct {
	Breakdown        []Dimension `json:"breakdown,omitempty"`
	DimensionFilters []Dimension `json:"dimensionFilters,omitempty"`
	Kind             *string     `json:"kind,omitempty"`
	Metrics          []Metric    `json:"metrics,omitempty"`
	OverlapMetrics   []Metric    `json:"overlapMetrics,omitempty"`
}
