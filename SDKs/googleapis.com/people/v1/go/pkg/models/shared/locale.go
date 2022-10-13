package shared

type Locale struct {
	Metadata *FieldMetadata `json:"metadata"`
	Value    *string        `json:"value"`
}
