package shared

// AutoResizeDimensionsRequest
// Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
type AutoResizeDimensionsRequest struct {
	DataSourceSheetDimensions *DataSourceSheetDimensionRange `json:"dataSourceSheetDimensions,omitempty"`
	Dimensions                *DimensionRange                `json:"dimensions,omitempty"`
}
