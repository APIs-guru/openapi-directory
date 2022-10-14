package shared

type RestResource struct {
	Methods   map[string]RestMethod   `json:"methods,omitempty"`
	Resources map[string]RestResource `json:"resources,omitempty"`
}
