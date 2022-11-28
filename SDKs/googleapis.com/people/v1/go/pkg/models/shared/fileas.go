package shared

// FileAsInput
// The name that should be used to sort the person in a list.
type FileAsInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Value    *string             `json:"value,omitempty"`
}

// FileAs
// The name that should be used to sort the person in a list.
type FileAs struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
