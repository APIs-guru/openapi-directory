package shared

// Tagline
// **DEPRECATED**: No data will be returned A brief one-line description of the person.
type Tagline struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
