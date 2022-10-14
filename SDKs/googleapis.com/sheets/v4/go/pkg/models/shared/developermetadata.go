package shared

type DeveloperMetadataVisibilityEnum string

const (
	DeveloperMetadataVisibilityEnumDeveloperMetadataVisibilityUnspecified DeveloperMetadataVisibilityEnum = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED"
	DeveloperMetadataVisibilityEnumDocument                               DeveloperMetadataVisibilityEnum = "DOCUMENT"
	DeveloperMetadataVisibilityEnumProject                                DeveloperMetadataVisibilityEnum = "PROJECT"
)

type DeveloperMetadata struct {
	Location      *DeveloperMetadataLocation       `json:"location,omitempty"`
	MetadataID    *int32                           `json:"metadataId,omitempty"`
	MetadataKey   *string                          `json:"metadataKey,omitempty"`
	MetadataValue *string                          `json:"metadataValue,omitempty"`
	Visibility    *DeveloperMetadataVisibilityEnum `json:"visibility,omitempty"`
}
