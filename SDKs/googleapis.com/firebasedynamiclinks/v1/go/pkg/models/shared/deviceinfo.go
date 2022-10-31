package shared



type DeviceInfo struct {
    DeviceModelName *string `json:"deviceModelName,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    LanguageCodeFromWebview *string `json:"languageCodeFromWebview,omitempty"`
    LanguageCodeRaw *string `json:"languageCodeRaw,omitempty"`
    ScreenResolutionHeight *string `json:"screenResolutionHeight,omitempty"`
    ScreenResolutionWidth *string `json:"screenResolutionWidth,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    
}

