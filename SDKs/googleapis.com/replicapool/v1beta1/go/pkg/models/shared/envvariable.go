package shared

// EnvVariable
// An environment variable to set for an action.
type EnvVariable struct {
	Hidden *bool   `json:"hidden,omitempty"`
	Name   *string `json:"name,omitempty"`
	Value  *string `json:"value,omitempty"`
}
