package shared

type ExtendedSourceContext struct {
	Context *SourceContext    `json:"context,omitempty"`
	Labels  map[string]string `json:"labels,omitempty"`
}
