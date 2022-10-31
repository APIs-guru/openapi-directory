package shared

type EnvVariable struct {
	Hidden *bool   `json:"hidden,omitempty"`
	Name   *string `json:"name,omitempty"`
	Value  *string `json:"value,omitempty"`
}
