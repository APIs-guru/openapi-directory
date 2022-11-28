package shared

// CustomEventClickAnnotation
// Annotate a click event.
type CustomEventClickAnnotation struct {
	Gclid *string `json:"gclid,omitempty"`
	Kind  *string `json:"kind,omitempty"`
}
