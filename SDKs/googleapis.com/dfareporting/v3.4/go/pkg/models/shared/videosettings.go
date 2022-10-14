package shared

type VideoSettingsOrientationEnum string

const (
	VideoSettingsOrientationEnumAny       VideoSettingsOrientationEnum = "ANY"
	VideoSettingsOrientationEnumLandscape VideoSettingsOrientationEnum = "LANDSCAPE"
	VideoSettingsOrientationEnumPortrait  VideoSettingsOrientationEnum = "PORTRAIT"
)

type VideoSettings struct {
	CompanionSettings *CompanionSetting             `json:"companionSettings,omitempty"`
	Kind              *string                       `json:"kind,omitempty"`
	ObaEnabled        *bool                         `json:"obaEnabled,omitempty"`
	ObaSettings       *ObaIcon                      `json:"obaSettings,omitempty"`
	Orientation       *VideoSettingsOrientationEnum `json:"orientation,omitempty"`
	SkippableSettings *SkippableSetting             `json:"skippableSettings,omitempty"`
	TranscodeSettings *TranscodeSetting             `json:"transcodeSettings,omitempty"`
}
