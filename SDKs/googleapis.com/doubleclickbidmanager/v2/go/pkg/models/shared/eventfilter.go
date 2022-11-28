package shared

// EventFilter
// Defines the type of filter to be applied to the path, a DV360 event dimension filter.
type EventFilter struct {
	DimensionFilter *PathQueryOptionsFilter `json:"dimensionFilter,omitempty"`
}
