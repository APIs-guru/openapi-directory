package shared




type AptSettingsTypeEnum string

const (
    AptSettingsTypeEnumTypeUnspecified AptSettingsTypeEnum = "TYPE_UNSPECIFIED"
AptSettingsTypeEnumDist AptSettingsTypeEnum = "DIST"
AptSettingsTypeEnumUpgrade AptSettingsTypeEnum = "UPGRADE"
)


type AptSettings struct {
    Excludes []string `json:"excludes,omitempty"`
    ExclusivePackages []string `json:"exclusivePackages,omitempty"`
    Type *AptSettingsTypeEnum `json:"type,omitempty"`
    
}

