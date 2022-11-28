package shared

// UserDefinedInput
// Arbitrary user data that is populated by the end users.
type UserDefinedInput struct {
	Key      *string             `json:"key,omitempty"`
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Value    *string             `json:"value,omitempty"`
}

// UserDefined
// Arbitrary user data that is populated by the end users.
type UserDefined struct {
	Key      *string        `json:"key,omitempty"`
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
