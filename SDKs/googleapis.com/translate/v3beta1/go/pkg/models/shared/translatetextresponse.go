package shared

type TranslateTextResponse struct {
	GlossaryTranslations []Translation `json:"glossaryTranslations"`
	Translations         []Translation `json:"translations"`
}
