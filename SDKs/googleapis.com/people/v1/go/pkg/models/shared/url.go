package shared

// URL
// A person's associated URLs.
type URL struct {
	FormattedType *string        `json:"formattedType,omitempty"`
	Metadata      *FieldMetadata `json:"metadata,omitempty"`
	Type          *string        `json:"type,omitempty"`
	Value         *string        `json:"value,omitempty"`
}

// URLInput
// A person's associated URLs.
type URLInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Type     *string             `json:"type,omitempty"`
	Value    *string             `json:"value,omitempty"`
}
