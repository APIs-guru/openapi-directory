package shared

// BraggingRightsInput
// **DEPRECATED**: No data will be returned A person's bragging rights.
type BraggingRightsInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Value    *string             `json:"value,omitempty"`
}

// BraggingRights
// **DEPRECATED**: No data will be returned A person's bragging rights.
type BraggingRights struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
