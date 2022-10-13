package shared

type DeviceInfo struct {
	DeviceModelName         *string `json:"deviceModelName"`
	LanguageCode            *string `json:"languageCode"`
	LanguageCodeFromWebview *string `json:"languageCodeFromWebview"`
	LanguageCodeRaw         *string `json:"languageCodeRaw"`
	ScreenResolutionHeight  *string `json:"screenResolutionHeight"`
	ScreenResolutionWidth   *string `json:"screenResolutionWidth"`
	Timezone                *string `json:"timezone"`
}
