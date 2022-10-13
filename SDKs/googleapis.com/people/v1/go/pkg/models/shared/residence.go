package shared

type Residence struct {
	Current  *bool          `json:"current"`
	Metadata *FieldMetadata `json:"metadata"`
	Value    *string        `json:"value"`
}
