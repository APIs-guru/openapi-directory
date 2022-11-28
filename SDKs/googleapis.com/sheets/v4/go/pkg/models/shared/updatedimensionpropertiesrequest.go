package shared

// UpdateDimensionPropertiesRequest
// Updates properties of dimensions within the specified range.
type UpdateDimensionPropertiesRequest struct {
	DataSourceSheetRange *DataSourceSheetDimensionRange `json:"dataSourceSheetRange,omitempty"`
	Fields               *string                        `json:"fields,omitempty"`
	Properties           *DimensionProperties           `json:"properties,omitempty"`
	Range                *DimensionRange                `json:"range,omitempty"`
}
