package shared

type AutoResizeDimensionsRequest struct {
	DataSourceSheetDimensions *DataSourceSheetDimensionRange `json:"dataSourceSheetDimensions"`
	Dimensions                *DimensionRange                `json:"dimensions"`
}
