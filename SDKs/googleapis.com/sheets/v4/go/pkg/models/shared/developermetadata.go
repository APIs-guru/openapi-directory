package shared

type DeveloperMetadataVisibilityEnum string

const (
	DeveloperMetadataVisibilityEnumDeveloperMetadataVisibilityUnspecified DeveloperMetadataVisibilityEnum = "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED"
	DeveloperMetadataVisibilityEnumDocument                               DeveloperMetadataVisibilityEnum = "DOCUMENT"
	DeveloperMetadataVisibilityEnumProject                                DeveloperMetadataVisibilityEnum = "PROJECT"
)

type DeveloperMetadata struct {
	Location      *DeveloperMetadataLocation       `json:"location"`
	MetadataID    *int32                           `json:"metadataId"`
	MetadataKey   *string                          `json:"metadataKey"`
	MetadataValue *string                          `json:"metadataValue"`
	Visibility    *DeveloperMetadataVisibilityEnum `json:"visibility"`
}
