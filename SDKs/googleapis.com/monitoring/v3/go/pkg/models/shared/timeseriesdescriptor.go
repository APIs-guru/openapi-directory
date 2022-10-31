package shared



type TimeSeriesDescriptor struct {
    LabelDescriptors []LabelDescriptor `json:"labelDescriptors,omitempty"`
    PointDescriptors []ValueDescriptor `json:"pointDescriptors,omitempty"`
    
}

