package shared

type Option struct {
	Name   *string  `json:"name,omitempty"`
	Values []string `json:"values,omitempty"`
}
