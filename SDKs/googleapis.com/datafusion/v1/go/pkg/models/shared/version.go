package shared

type VersionTypeEnum string

const (
	VersionTypeEnumTypeUnspecified         VersionTypeEnum = "TYPE_UNSPECIFIED"
	VersionTypeEnumTypePreview             VersionTypeEnum = "TYPE_PREVIEW"
	VersionTypeEnumTypeGeneralAvailability VersionTypeEnum = "TYPE_GENERAL_AVAILABILITY"
)

type Version struct {
	AvailableFeatures []string         `json:"availableFeatures"`
	DefaultVersion    *bool            `json:"defaultVersion"`
	Type              *VersionTypeEnum `json:"type"`
	VersionNumber     *string          `json:"versionNumber"`
}
