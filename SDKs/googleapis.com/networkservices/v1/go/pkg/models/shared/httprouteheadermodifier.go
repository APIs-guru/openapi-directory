package shared

type HTTPRouteHeaderModifier struct {
	Add    map[string]string `json:"add"`
	Remove []string          `json:"remove"`
	Set    map[string]string `json:"set"`
}
