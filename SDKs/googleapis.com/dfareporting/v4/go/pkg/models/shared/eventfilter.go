package shared

// EventFilter
// Represents a DfaReporting event filter.
type EventFilter struct {
	DimensionFilter *PathReportDimensionValue `json:"dimensionFilter,omitempty"`
	Kind            *string                   `json:"kind,omitempty"`
	UvarFilter      *UvarFilter               `json:"uvarFilter,omitempty"`
}
