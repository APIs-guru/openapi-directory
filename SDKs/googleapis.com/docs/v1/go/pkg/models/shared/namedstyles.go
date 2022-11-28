package shared

// NamedStyles
// The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
type NamedStyles struct {
	Styles []NamedStyle `json:"styles,omitempty"`
}
