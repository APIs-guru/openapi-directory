package shared

type Resource struct {
	Labels  map[string]string `json:"labels"`
	Name    *string           `json:"name"`
	Service *string           `json:"service"`
	Type    *string           `json:"type"`
}
