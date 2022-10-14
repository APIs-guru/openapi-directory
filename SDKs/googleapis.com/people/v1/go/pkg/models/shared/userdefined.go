package shared

type UserDefined struct {
	Key      *string        `json:"key,omitempty"`
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
