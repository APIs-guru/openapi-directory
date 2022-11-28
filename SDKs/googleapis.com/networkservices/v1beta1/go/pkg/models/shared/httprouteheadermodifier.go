package shared

// HTTPRouteHeaderModifier
// The specification for modifying HTTP header in HTTP request and HTTP response.
type HTTPRouteHeaderModifier struct {
	Add    map[string]string `json:"add,omitempty"`
	Remove []string          `json:"remove,omitempty"`
	Set    map[string]string `json:"set,omitempty"`
}
