package shared

type SiteVideoSettingsOrientationEnum string

const (
	SiteVideoSettingsOrientationEnumAny       SiteVideoSettingsOrientationEnum = "ANY"
	SiteVideoSettingsOrientationEnumLandscape SiteVideoSettingsOrientationEnum = "LANDSCAPE"
	SiteVideoSettingsOrientationEnumPortrait  SiteVideoSettingsOrientationEnum = "PORTRAIT"
)

type SiteVideoSettings struct {
	CompanionSettings *SiteCompanionSetting             `json:"companionSettings"`
	Kind              *string                           `json:"kind"`
	Orientation       *SiteVideoSettingsOrientationEnum `json:"orientation"`
	SkippableSettings *SiteSkippableSetting             `json:"skippableSettings"`
	TranscodeSettings *SiteTranscodeSetting             `json:"transcodeSettings"`
}
