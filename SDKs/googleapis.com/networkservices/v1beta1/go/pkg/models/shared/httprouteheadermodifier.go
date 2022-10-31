package shared

type HTTPRouteHeaderModifier struct {
	Add    map[string]string `json:"add,omitempty"`
	Remove []string          `json:"remove,omitempty"`
	Set    map[string]string `json:"set,omitempty"`
}
