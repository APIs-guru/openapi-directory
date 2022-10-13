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
	ObaEnabled        *bool                             `json:"obaEnabled"`
	ObaSettings       *ObaIcon                          `json:"obaSettings"`
	Orientation       *SiteVideoSettingsOrientationEnum `json:"orientation"`
	SkippableSettings *SiteSkippableSetting             `json:"skippableSettings"`
	TranscodeSettings *SiteTranscodeSetting             `json:"transcodeSettings"`
}
