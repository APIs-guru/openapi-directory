package shared

type TagLanguageMarshallerWrapped struct {
	Callback *string                 `json:"callback"`
	Meta     *Meta                   `json:"meta"`
	Results  []TagLanguageMarshaller `json:"results"`
}
