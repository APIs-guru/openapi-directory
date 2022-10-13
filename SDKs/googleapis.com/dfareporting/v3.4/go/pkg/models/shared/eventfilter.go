package shared

type EventFilter struct {
	DimensionFilter *PathReportDimensionValue `json:"dimensionFilter"`
	Kind            *string                   `json:"kind"`
}
