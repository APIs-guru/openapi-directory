package shared

type Birthday struct {
	Date     *Date          `json:"date"`
	Metadata *FieldMetadata `json:"metadata"`
	Text     *string        `json:"text"`
}
