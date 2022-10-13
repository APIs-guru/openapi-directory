package shared

type TemplateMetadata struct {
	Description *string             `json:"description"`
	Name        *string             `json:"name"`
	Parameters  []ParameterMetadata `json:"parameters"`
}
