package shared

// DimensionFilter
// Represents a dimension filter.
type DimensionFilter struct {
	DimensionName *string `json:"dimensionName,omitempty"`
	Kind          *string `json:"kind,omitempty"`
	Value         *string `json:"value,omitempty"`
}
