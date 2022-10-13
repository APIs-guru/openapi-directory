package shared

type AptSettingsTypeEnum string

const (
	AptSettingsTypeEnumTypeUnspecified AptSettingsTypeEnum = "TYPE_UNSPECIFIED"
	AptSettingsTypeEnumDist            AptSettingsTypeEnum = "DIST"
	AptSettingsTypeEnumUpgrade         AptSettingsTypeEnum = "UPGRADE"
)

type AptSettings struct {
	Excludes          []string             `json:"excludes"`
	ExclusivePackages []string             `json:"exclusivePackages"`
	Type              *AptSettingsTypeEnum `json:"type"`
}
