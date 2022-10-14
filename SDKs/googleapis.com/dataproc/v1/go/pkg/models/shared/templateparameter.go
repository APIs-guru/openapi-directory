package shared

type TemplateParameter struct {
	Description *string              `json:"description,omitempty"`
	Fields      []string             `json:"fields,omitempty"`
	Name        *string              `json:"name,omitempty"`
	Validation  *ParameterValidation `json:"validation,omitempty"`
}
