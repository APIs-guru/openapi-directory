package shared

// Photo
// A person's photo. A picture shown next to the person's name to help others recognize the person.
type Photo struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	URL      *string        `json:"url,omitempty"`
}
