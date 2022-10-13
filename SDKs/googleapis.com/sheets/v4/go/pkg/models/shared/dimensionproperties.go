package shared

type DimensionProperties struct {
	DataSourceColumnReference *DataSourceColumnReference `json:"dataSourceColumnReference"`
	DeveloperMetadata         []DeveloperMetadata        `json:"developerMetadata"`
	HiddenByFilter            *bool                      `json:"hiddenByFilter"`
	HiddenByUser              *bool                      `json:"hiddenByUser"`
	PixelSize                 *int32                     `json:"pixelSize"`
}
