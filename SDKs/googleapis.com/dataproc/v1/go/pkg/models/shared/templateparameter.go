package shared

type TemplateParameter struct {
	Description *string              `json:"description"`
	Fields      []string             `json:"fields"`
	Name        *string              `json:"name"`
	Validation  *ParameterValidation `json:"validation"`
}
