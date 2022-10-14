package shared

type Residence struct {
	Current  *bool          `json:"current,omitempty"`
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
