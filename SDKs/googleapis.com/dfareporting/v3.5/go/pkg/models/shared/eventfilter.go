package shared

type EventFilter struct {
	DimensionFilter *PathReportDimensionValue `json:"dimensionFilter,omitempty"`
	Kind            *string                   `json:"kind,omitempty"`
}
