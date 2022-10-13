package shared

type VideoSettingsOrientationEnum string

const (
	VideoSettingsOrientationEnumAny       VideoSettingsOrientationEnum = "ANY"
	VideoSettingsOrientationEnumLandscape VideoSettingsOrientationEnum = "LANDSCAPE"
	VideoSettingsOrientationEnumPortrait  VideoSettingsOrientationEnum = "PORTRAIT"
)

type VideoSettings struct {
	CompanionSettings *CompanionSetting             `json:"companionSettings"`
	Kind              *string                       `json:"kind"`
	Orientation       *VideoSettingsOrientationEnum `json:"orientation"`
	SkippableSettings *SkippableSetting             `json:"skippableSettings"`
	TranscodeSettings *TranscodeSetting             `json:"transcodeSettings"`
}
