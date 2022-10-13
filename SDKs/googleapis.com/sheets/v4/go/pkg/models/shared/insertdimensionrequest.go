package shared

type InsertDimensionRequest struct {
	InheritFromBefore *bool           `json:"inheritFromBefore"`
	Range             *DimensionRange `json:"range"`
}
