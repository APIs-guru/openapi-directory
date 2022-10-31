package shared

type EventFilter struct {
	DimensionFilter *PathQueryOptionsFilter `json:"dimensionFilter,omitempty"`
}
