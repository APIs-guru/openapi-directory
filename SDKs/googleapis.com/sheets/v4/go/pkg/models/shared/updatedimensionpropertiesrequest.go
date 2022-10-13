package shared

type UpdateDimensionPropertiesRequest struct {
	DataSourceSheetRange *DataSourceSheetDimensionRange `json:"dataSourceSheetRange"`
	Fields               *string                        `json:"fields"`
	Properties           *DimensionProperties           `json:"properties"`
	Range                *DimensionRange                `json:"range"`
}
