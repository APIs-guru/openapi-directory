package shared

type ExtendedSourceContext struct {
	Context *SourceContext    `json:"context"`
	Labels  map[string]string `json:"labels"`
}
