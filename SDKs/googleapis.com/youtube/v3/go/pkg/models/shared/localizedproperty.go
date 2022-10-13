package shared

type LocalizedProperty struct {
	DefaultLanguage *LanguageTag      `json:"defaultLanguage"`
	Localized       []LocalizedString `json:"localized"`
}
