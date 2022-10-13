package shared

type Photo struct {
	Metadata *FieldMetadata `json:"metadata"`
	URL      *string        `json:"url"`
}
