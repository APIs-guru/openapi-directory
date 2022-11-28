package shared

// FieldMetadata
// Metadata about a field.
type FieldMetadata struct {
	Primary       *bool   `json:"primary,omitempty"`
	Source        *Source `json:"source,omitempty"`
	SourcePrimary *bool   `json:"sourcePrimary,omitempty"`
	Verified      *bool   `json:"verified,omitempty"`
}

// FieldMetadataInput
// Metadata about a field.
type FieldMetadataInput struct {
	Source        *SourceInput `json:"source,omitempty"`
	SourcePrimary *bool        `json:"sourcePrimary,omitempty"`
}
