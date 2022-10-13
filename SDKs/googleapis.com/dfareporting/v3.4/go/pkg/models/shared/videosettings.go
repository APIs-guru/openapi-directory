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
	ObaEnabled        *bool                         `json:"obaEnabled"`
	ObaSettings       *ObaIcon                      `json:"obaSettings"`
	Orientation       *VideoSettingsOrientationEnum `json:"orientation"`
	SkippableSettings *SkippableSetting             `json:"skippableSettings"`
	TranscodeSettings *TranscodeSetting             `json:"transcodeSettings"`
}
