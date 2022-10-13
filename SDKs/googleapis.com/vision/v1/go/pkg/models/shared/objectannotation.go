package shared

type ObjectAnnotation struct {
	LanguageCode *string  `json:"languageCode"`
	Mid          *string  `json:"mid"`
	Name         *string  `json:"name"`
	Score        *float32 `json:"score"`
}
