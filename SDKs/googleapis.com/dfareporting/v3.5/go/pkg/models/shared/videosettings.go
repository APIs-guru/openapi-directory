package shared

type VideoSettingsOrientationEnum string

const (
	VideoSettingsOrientationEnumAny       VideoSettingsOrientationEnum = "ANY"
	VideoSettingsOrientationEnumLandscape VideoSettingsOrientationEnum = "LANDSCAPE"
	VideoSettingsOrientationEnumPortrait  VideoSettingsOrientationEnum = "PORTRAIT"
)

// VideoSettings
// Video Settings
type VideoSettings struct {
	CompanionSettings *CompanionSetting             `json:"companionSettings,omitempty"`
	DurationSeconds   *int32                        `json:"durationSeconds,omitempty"`
	Kind              *string                       `json:"kind,omitempty"`
	ObaEnabled        *bool                         `json:"obaEnabled,omitempty"`
	ObaSettings       *ObaIcon                      `json:"obaSettings,omitempty"`
	Orientation       *VideoSettingsOrientationEnum `json:"orientation,omitempty"`
	SkippableSettings *SkippableSetting             `json:"skippableSettings,omitempty"`
	TranscodeSettings *TranscodeSetting             `json:"transcodeSettings,omitempty"`
}
