package shared

type Birthday struct {
	Date     *Date          `json:"date,omitempty"`
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Text     *string        `json:"text,omitempty"`
}
