package shared

// TimeSeriesDescriptor
// A descriptor for the labels and points in a time series.
type TimeSeriesDescriptor struct {
	LabelDescriptors []LabelDescriptor `json:"labelDescriptors,omitempty"`
	PointDescriptors []ValueDescriptor `json:"pointDescriptors,omitempty"`
}
