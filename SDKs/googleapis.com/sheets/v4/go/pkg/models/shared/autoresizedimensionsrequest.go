package shared

type AutoResizeDimensionsRequest struct {
	DataSourceSheetDimensions *DataSourceSheetDimensionRange `json:"dataSourceSheetDimensions,omitempty"`
	Dimensions                *DimensionRange                `json:"dimensions,omitempty"`
}
