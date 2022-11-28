package shared

// Annotation
// Text annotation with a set of attributes.
type Annotation struct {
	Attributes  *Attributes        `json:"attributes,omitempty"`
	Description *TruncatableString `json:"description,omitempty"`
}
