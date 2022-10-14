package shared

type Photo struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	URL      *string        `json:"url,omitempty"`
}
