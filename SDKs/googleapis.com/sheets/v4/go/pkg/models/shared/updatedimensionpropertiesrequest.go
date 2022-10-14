package shared

type UpdateDimensionPropertiesRequest struct {
	DataSourceSheetRange *DataSourceSheetDimensionRange `json:"dataSourceSheetRange,omitempty"`
	Fields               *string                        `json:"fields,omitempty"`
	Properties           *DimensionProperties           `json:"properties,omitempty"`
	Range                *DimensionRange                `json:"range,omitempty"`
}
