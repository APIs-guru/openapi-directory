package shared

type DeveloperMetadataLocationLocationTypeEnum string

const (
	DeveloperMetadataLocationLocationTypeEnumDeveloperMetadataLocationTypeUnspecified DeveloperMetadataLocationLocationTypeEnum = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"
	DeveloperMetadataLocationLocationTypeEnumRow                                      DeveloperMetadataLocationLocationTypeEnum = "ROW"
	DeveloperMetadataLocationLocationTypeEnumColumn                                   DeveloperMetadataLocationLocationTypeEnum = "COLUMN"
	DeveloperMetadataLocationLocationTypeEnumSheet                                    DeveloperMetadataLocationLocationTypeEnum = "SHEET"
	DeveloperMetadataLocationLocationTypeEnumSpreadsheet                              DeveloperMetadataLocationLocationTypeEnum = "SPREADSHEET"
)

type DeveloperMetadataLocation struct {
	DimensionRange *DimensionRange                            `json:"dimensionRange"`
	LocationType   *DeveloperMetadataLocationLocationTypeEnum `json:"locationType"`
	SheetID        *int32                                     `json:"sheetId"`
	Spreadsheet    *bool                                      `json:"spreadsheet"`
}
