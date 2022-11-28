package shared

// ClientDataInput
// Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
type ClientDataInput struct {
	Key      *string             `json:"key,omitempty"`
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Value    *string             `json:"value,omitempty"`
}

// ClientData
// Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.
type ClientData struct {
	Key      *string        `json:"key,omitempty"`
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
