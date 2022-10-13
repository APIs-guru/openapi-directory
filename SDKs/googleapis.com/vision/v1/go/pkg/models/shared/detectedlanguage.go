package shared

type DetectedLanguage struct {
	Confidence   *float32 `json:"confidence"`
	LanguageCode *string  `json:"languageCode"`
}
