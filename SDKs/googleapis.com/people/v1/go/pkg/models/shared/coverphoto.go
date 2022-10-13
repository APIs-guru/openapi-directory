package shared

type CoverPhoto struct {
	Metadata *FieldMetadata `json:"metadata"`
	URL      *string        `json:"url"`
}
