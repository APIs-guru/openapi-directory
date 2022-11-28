package shared

// DocumentTransform
// A transformation of a document.
type DocumentTransform struct {
	Document        *string          `json:"document,omitempty"`
	FieldTransforms []FieldTransform `json:"fieldTransforms,omitempty"`
}
