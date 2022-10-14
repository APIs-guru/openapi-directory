package shared

type VersionTypeEnum string

const (
	VersionTypeEnumTypeUnspecified         VersionTypeEnum = "TYPE_UNSPECIFIED"
	VersionTypeEnumTypePreview             VersionTypeEnum = "TYPE_PREVIEW"
	VersionTypeEnumTypeGeneralAvailability VersionTypeEnum = "TYPE_GENERAL_AVAILABILITY"
)

type Version struct {
	AvailableFeatures []string         `json:"availableFeatures,omitempty"`
	DefaultVersion    *bool            `json:"defaultVersion,omitempty"`
	Type              *VersionTypeEnum `json:"type,omitempty"`
	VersionNumber     *string          `json:"versionNumber,omitempty"`
}
