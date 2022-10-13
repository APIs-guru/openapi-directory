package shared

type Language struct {
	ID           *string `json:"id"`
	Kind         *string `json:"kind"`
	LanguageCode *string `json:"languageCode"`
	Name         *string `json:"name"`
}
