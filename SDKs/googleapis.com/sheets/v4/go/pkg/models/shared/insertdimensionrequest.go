package shared

// InsertDimensionRequest
// Inserts rows or columns in a sheet at a particular index.
type InsertDimensionRequest struct {
	InheritFromBefore *bool           `json:"inheritFromBefore,omitempty"`
	Range             *DimensionRange `json:"range,omitempty"`
}
