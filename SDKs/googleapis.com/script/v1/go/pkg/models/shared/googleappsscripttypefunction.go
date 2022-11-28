package shared

// GoogleAppsScriptTypeFunction
// Represents a function in a script project.
type GoogleAppsScriptTypeFunction struct {
	Name       *string  `json:"name,omitempty"`
	Parameters []string `json:"parameters,omitempty"`
}
