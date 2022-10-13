package shared

type DeveloperMetadataLookupLocationMatchingStrategyEnum string

const (
	DeveloperMetadataLookupLocationMatchingStrategyEnumDeveloperMetadataLocationMatchingStrategyUnspecified DeveloperMetadataLookupLocationMatchingStrategyEnum = "DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED"
	DeveloperMetadataLookupLocationMatchingStrategyEnumExactLocation                                        DeveloperMetadataLookupLocationMatchingStrategyEnum = "EXACT_LOCATION"
	DeveloperMetadataLookupLocationMatchingStrategyEnumIntersectingLocation                                 DeveloperMetadataLookupLocationMatchingStrategyEnum = "INTERSECTING_LOCATION"
)

type DeveloperMetadataLookupLocationTypeEnum string

const (
	DeveloperMetadataLookupLocationTypeEnumDeveloperMetadataLocationTypeUnspecified DeveloperMetadataLookupLocationTypeEnum = "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED"
	DeveloperMetadataLookupLocationTypeEnumRow                                      DeveloperMetadataLookupLocationTypeEnum = "ROW"
	DeveloperMetadataLookupLocationTypeEnumColumn                                   DeveloperMetadataLookupLocationTypeEnum = "COLUMN"
	DeveloperMetadataLookupLocationTypeEnumSheet                                    DeveloperMetadataLookupLocationTypeEnum = "SHEET"
	DeveloperMetadataLookupLocationTypeEnumSpreadsheet                              DeveloperMetadataLookupLocationTypeEnum = "SPREADSHEET"
)

type DeveloperMetadataLookupVisibilityEnum string

const (
	DeveloperMetadataLookupVisibilityEnumDeveloperMetadataVisibilityUnspecified DeveloperMetadataLookupVisibilityEnum = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED"
	DeveloperMetadataLookupVisibilityEnumDocument                               DeveloperMetadataLookupVisibilityEnum = "DOCUMENT"
	DeveloperMetadataLookupVisibilityEnumProject                                DeveloperMetadataLookupVisibilityEnum = "PROJECT"
)

type DeveloperMetadataLookup struct {
	LocationMatchingStrategy *DeveloperMetadataLookupLocationMatchingStrategyEnum `json:"locationMatchingStrategy"`
	LocationType             *DeveloperMetadataLookupLocationTypeEnum             `json:"locationType"`
	MetadataID               *int32                                               `json:"metadataId"`
	MetadataKey              *string                                              `json:"metadataKey"`
	MetadataLocation         *DeveloperMetadataLocation                           `json:"metadataLocation"`
	MetadataValue            *string                                              `json:"metadataValue"`
	Visibility               *DeveloperMetadataLookupVisibilityEnum               `json:"visibility"`
}
