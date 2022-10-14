package shared

type ReachReportCompatibleFields struct {
	DimensionFilters        []Dimension `json:"dimensionFilters,omitempty"`
	Dimensions              []Dimension `json:"dimensions,omitempty"`
	Kind                    *string     `json:"kind,omitempty"`
	Metrics                 []Metric    `json:"metrics,omitempty"`
	PivotedActivityMetrics  []Metric    `json:"pivotedActivityMetrics,omitempty"`
	ReachByFrequencyMetrics []Metric    `json:"reachByFrequencyMetrics,omitempty"`
}
