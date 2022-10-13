package shared

type ContextAttribute struct {
	Name   *string  `json:"name"`
	Values []string `json:"values"`
}
