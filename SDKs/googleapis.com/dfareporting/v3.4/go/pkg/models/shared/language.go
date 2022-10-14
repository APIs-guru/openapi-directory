package shared

type Language struct {
	ID           *string `json:"id,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	LanguageCode *string `json:"languageCode,omitempty"`
	Name         *string `json:"name,omitempty"`
}
