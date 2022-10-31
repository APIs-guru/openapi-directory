package shared

type TextStream struct {
	Codec        *string    `json:"codec,omitempty"`
	LanguageCode *string    `json:"languageCode,omitempty"`
	Mapping      []TextAtom `json:"mapping,omitempty"`
}
