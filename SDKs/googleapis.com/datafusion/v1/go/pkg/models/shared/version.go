package shared

type VersionTypeEnum string

const (
	VersionTypeEnumTypeUnspecified         VersionTypeEnum = "TYPE_UNSPECIFIED"
	VersionTypeEnumTypePreview             VersionTypeEnum = "TYPE_PREVIEW"
	VersionTypeEnumTypeGeneralAvailability VersionTypeEnum = "TYPE_GENERAL_AVAILABILITY"
)

// Version
// The Data Fusion version. This proto message stores information about certain Data Fusion version, which is used for Data Fusion version upgrade.
type Version struct {
	AvailableFeatures []string         `json:"availableFeatures,omitempty"`
	DefaultVersion    *bool            `json:"defaultVersion,omitempty"`
	Type              *VersionTypeEnum `json:"type,omitempty"`
	VersionNumber     *string          `json:"versionNumber,omitempty"`
}
