package shared

type DocumentTransform struct {
	Document        *string          `json:"document"`
	FieldTransforms []FieldTransform `json:"fieldTransforms"`
}
