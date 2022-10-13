package shared

type TextStream struct {
	Codec        *string    `json:"codec"`
	LanguageCode *string    `json:"languageCode"`
	Mapping      []TextAtom `json:"mapping"`
}
