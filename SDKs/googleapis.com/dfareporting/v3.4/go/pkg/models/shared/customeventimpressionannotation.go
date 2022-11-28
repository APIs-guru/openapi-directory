package shared

// CustomEventImpressionAnnotation
// Annotate an impression.
type CustomEventImpressionAnnotation struct {
	Kind             *string `json:"kind,omitempty"`
	PathImpressionID *string `json:"pathImpressionId,omitempty"`
}
