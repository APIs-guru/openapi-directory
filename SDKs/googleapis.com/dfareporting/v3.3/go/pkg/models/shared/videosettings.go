package shared




type VideoSettingsOrientationEnum string

const (
    VideoSettingsOrientationEnumAny VideoSettingsOrientationEnum = "ANY"
VideoSettingsOrientationEnumLandscape VideoSettingsOrientationEnum = "LANDSCAPE"
VideoSettingsOrientationEnumPortrait VideoSettingsOrientationEnum = "PORTRAIT"
)


type VideoSettings struct {
    CompanionSettings *CompanionSetting `json:"companionSettings,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Orientation *VideoSettingsOrientationEnum `json:"orientation,omitempty"`
    SkippableSettings *SkippableSetting `json:"skippableSettings,omitempty"`
    TranscodeSettings *TranscodeSetting `json:"transcodeSettings,omitempty"`
    
}

