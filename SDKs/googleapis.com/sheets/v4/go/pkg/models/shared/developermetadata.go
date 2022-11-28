package shared

type DeveloperMetadataVisibilityEnum string

const (
	DeveloperMetadataVisibilityEnumDeveloperMetadataVisibilityUnspecified DeveloperMetadataVisibilityEnum = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED"
	DeveloperMetadataVisibilityEnumDocument                               DeveloperMetadataVisibilityEnum = "DOCUMENT"
	DeveloperMetadataVisibilityEnumProject                                DeveloperMetadataVisibilityEnum = "PROJECT"
)

// DeveloperMetadata
// Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too.
type DeveloperMetadata struct {
	Location      *DeveloperMetadataLocation       `json:"location,omitempty"`
	MetadataID    *int32                           `json:"metadataId,omitempty"`
	MetadataKey   *string                          `json:"metadataKey,omitempty"`
	MetadataValue *string                          `json:"metadataValue,omitempty"`
	Visibility    *DeveloperMetadataVisibilityEnum `json:"visibility,omitempty"`
}
