package shared

// CoverPhoto
// A person's cover photo. A large image shown on the person's profile page that represents who they are or what they care about.
type CoverPhoto struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	URL      *string        `json:"url,omitempty"`
}
