package shared

// TimeSeriesData
// Represents the values of a time series associated with a TimeSeriesDescriptor.
type TimeSeriesData struct {
	LabelValues []LabelValue `json:"labelValues,omitempty"`
	PointData   []PointData  `json:"pointData,omitempty"`
}
