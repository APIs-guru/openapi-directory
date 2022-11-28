package shared

type AptSettingsTypeEnum string

const (
	AptSettingsTypeEnumTypeUnspecified AptSettingsTypeEnum = "TYPE_UNSPECIFIED"
	AptSettingsTypeEnumDist            AptSettingsTypeEnum = "DIST"
	AptSettingsTypeEnumUpgrade         AptSettingsTypeEnum = "UPGRADE"
)

// AptSettings
// Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
type AptSettings struct {
	Excludes          []string             `json:"excludes,omitempty"`
	ExclusivePackages []string             `json:"exclusivePackages,omitempty"`
	Type              *AptSettingsTypeEnum `json:"type,omitempty"`
}
