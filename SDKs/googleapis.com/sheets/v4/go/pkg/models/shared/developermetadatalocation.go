package shared

type DeveloperMetadataLocationLocationTypeEnum string

const (
	DeveloperMetadataLocationLocationTypeEnumDeveloperMetadataLocationTypeUnspecified DeveloperMetadataLocationLocationTypeEnum = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"
	DeveloperMetadataLocationLocationTypeEnumRow                                      DeveloperMetadataLocationLocationTypeEnum = "ROW"
	DeveloperMetadataLocationLocationTypeEnumColumn                                   DeveloperMetadataLocationLocationTypeEnum = "COLUMN"
	DeveloperMetadataLocationLocationTypeEnumSheet                                    DeveloperMetadataLocationLocationTypeEnum = "SHEET"
	DeveloperMetadataLocationLocationTypeEnumSpreadsheet                              DeveloperMetadataLocationLocationTypeEnum = "SPREADSHEET"
)

// DeveloperMetadataLocation
// A location where metadata may be associated in a spreadsheet.
type DeveloperMetadataLocation struct {
	DimensionRange *DimensionRange                            `json:"dimensionRange,omitempty"`
	LocationType   *DeveloperMetadataLocationLocationTypeEnum `json:"locationType,omitempty"`
	SheetID        *int32                                     `json:"sheetId,omitempty"`
	Spreadsheet    *bool                                      `json:"spreadsheet,omitempty"`
}
