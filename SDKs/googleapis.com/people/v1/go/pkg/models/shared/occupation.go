package shared

type Occupation struct {
	Metadata *FieldMetadata `json:"metadata"`
	Value    *string        `json:"value"`
}
