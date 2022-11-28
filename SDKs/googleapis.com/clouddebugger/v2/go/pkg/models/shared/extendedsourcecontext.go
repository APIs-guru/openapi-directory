package shared

// ExtendedSourceContext
// An ExtendedSourceContext is a SourceContext combined with additional details describing the context.
type ExtendedSourceContext struct {
	Context *SourceContext    `json:"context,omitempty"`
	Labels  map[string]string `json:"labels,omitempty"`
}
