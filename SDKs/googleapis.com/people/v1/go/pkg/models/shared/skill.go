package shared

// SkillInput
// A skill that the person has.
type SkillInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Value    *string             `json:"value,omitempty"`
}

// Skill
// A skill that the person has.
type Skill struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
