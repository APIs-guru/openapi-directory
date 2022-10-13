package shared

type RestResource struct {
	Methods   map[string]RestMethod   `json:"methods"`
	Resources map[string]RestResource `json:"resources"`
}
