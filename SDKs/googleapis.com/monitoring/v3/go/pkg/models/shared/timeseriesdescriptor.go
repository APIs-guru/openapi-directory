package shared

type TimeSeriesDescriptor struct {
	LabelDescriptors []LabelDescriptor `json:"labelDescriptors"`
	PointDescriptors []ValueDescriptor `json:"pointDescriptors"`
}
