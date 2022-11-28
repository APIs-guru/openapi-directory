package shared

// TemplateMetadata
// Metadata describing a template.
type TemplateMetadata struct {
	Description *string             `json:"description,omitempty"`
	Name        *string             `json:"name,omitempty"`
	Parameters  []ParameterMetadata `json:"parameters,omitempty"`
}
