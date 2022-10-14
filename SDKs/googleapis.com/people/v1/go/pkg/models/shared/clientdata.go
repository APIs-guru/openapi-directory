package shared

type ClientData struct {
	Key      *string        `json:"key,omitempty"`
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
