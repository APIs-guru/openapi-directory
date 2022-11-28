package shared

// TemplateParameter
// A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)
type TemplateParameter struct {
	Description *string              `json:"description,omitempty"`
	Fields      []string             `json:"fields,omitempty"`
	Name        *string              `json:"name,omitempty"`
	Validation  *ParameterValidation `json:"validation,omitempty"`
}
