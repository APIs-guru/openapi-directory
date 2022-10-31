package shared




type SiteVideoSettingsOrientationEnum string

const (
    SiteVideoSettingsOrientationEnumAny SiteVideoSettingsOrientationEnum = "ANY"
SiteVideoSettingsOrientationEnumLandscape SiteVideoSettingsOrientationEnum = "LANDSCAPE"
SiteVideoSettingsOrientationEnumPortrait SiteVideoSettingsOrientationEnum = "PORTRAIT"
)


type SiteVideoSettings struct {
    CompanionSettings *SiteCompanionSetting `json:"companionSettings,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ObaEnabled *bool `json:"obaEnabled,omitempty"`
    ObaSettings *ObaIcon `json:"obaSettings,omitempty"`
    Orientation *SiteVideoSettingsOrientationEnum `json:"orientation,omitempty"`
    SkippableSettings *SiteSkippableSetting `json:"skippableSettings,omitempty"`
    TranscodeSettings *SiteTranscodeSetting `json:"transcodeSettings,omitempty"`
    
}

