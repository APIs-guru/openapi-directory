package shared

type Skill struct {
	Metadata *FieldMetadata `json:"metadata"`
	Value    *string        `json:"value"`
}
