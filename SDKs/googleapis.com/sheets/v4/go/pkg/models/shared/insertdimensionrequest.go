package shared

type InsertDimensionRequest struct {
	InheritFromBefore *bool           `json:"inheritFromBefore,omitempty"`
	Range             *DimensionRange `json:"range,omitempty"`
}
