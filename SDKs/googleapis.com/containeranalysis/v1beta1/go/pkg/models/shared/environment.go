package shared

// Environment
// Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir".
type Environment struct {
	CustomValues map[string]string `json:"customValues,omitempty"`
}
