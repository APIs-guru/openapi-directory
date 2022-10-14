package shared

type CoverPhoto struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	URL      *string        `json:"url,omitempty"`
}
