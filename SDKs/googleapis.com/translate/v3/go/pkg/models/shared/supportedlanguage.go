package shared

type SupportedLanguage struct {
	DisplayName   *string `json:"displayName"`
	LanguageCode  *string `json:"languageCode"`
	SupportSource *bool   `json:"supportSource"`
	SupportTarget *bool   `json:"supportTarget"`
}
