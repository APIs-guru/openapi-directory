package shared

type TextAnnotation struct {
	Pages []Page  `json:"pages"`
	Text  *string `json:"text"`
}
