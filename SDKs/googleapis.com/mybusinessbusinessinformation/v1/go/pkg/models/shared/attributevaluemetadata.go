package shared

// AttributeValueMetadata
// Metadata for supported attribute values.
type AttributeValueMetadata struct {
	DisplayName *string      `json:"displayName,omitempty"`
	Value       *interface{} `json:"value,omitempty"`
}
