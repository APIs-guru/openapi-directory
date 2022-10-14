package shared

type DocumentTransform struct {
	Document        *string          `json:"document,omitempty"`
	FieldTransforms []FieldTransform `json:"fieldTransforms,omitempty"`
}
