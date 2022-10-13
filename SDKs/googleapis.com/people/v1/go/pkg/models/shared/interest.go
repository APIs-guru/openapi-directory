package shared

type Interest struct {
	Metadata *FieldMetadata `json:"metadata"`
	Value    *string        `json:"value"`
}
