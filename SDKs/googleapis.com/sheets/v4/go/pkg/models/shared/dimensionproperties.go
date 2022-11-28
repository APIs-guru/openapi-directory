package shared

// DimensionProperties
// Properties about a dimension.
type DimensionProperties struct {
	DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference,omitempty"`
	DeveloperMetadata         []DeveloperMetadata        `json:"developerMetadata,omitempty"`
	HiddenByFilter            *bool                      `json:"hiddenByFilter,omitempty"`
	HiddenByUser              *bool                      `json:"hiddenByUser,omitempty"`
	PixelSize                 *int32                     `json:"pixelSize,omitempty"`
}
