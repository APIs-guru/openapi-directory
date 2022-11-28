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

// DeveloperMetadataLookup
// Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified.
type DeveloperMetadataLookup struct {
	LocationMatchingStrategy *DeveloperMetadataLookupLocationMatchingStrategyEnum `json:"locationMatchingStrategy,omitempty"`
	LocationType             *DeveloperMetadataLookupLocationTypeEnum             `json:"locationType,omitempty"`
	MetadataID               *int32                                               `json:"metadataId,omitempty"`
	MetadataKey              *string                                              `json:"metadataKey,omitempty"`
	MetadataLocation         *DeveloperMetadataLocation                           `json:"metadataLocation,omitempty"`
	MetadataValue            *string                                              `json:"metadataValue,omitempty"`
	Visibility               *DeveloperMetadataLookupVisibilityEnum               `json:"visibility,omitempty"`
}
