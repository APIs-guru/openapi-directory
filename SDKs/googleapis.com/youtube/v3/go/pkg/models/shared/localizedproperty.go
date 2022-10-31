package shared

type LocalizedProperty struct {
	DefaultLanguage *LanguageTag      `json:"defaultLanguage,omitempty"`
	Localized       []LocalizedString `json:"localized,omitempty"`
}
