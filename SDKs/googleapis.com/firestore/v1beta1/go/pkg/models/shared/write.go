package shared

type Write struct {
	CurrentDocument  *Precondition      `json:"currentDocument"`
	Delete           *string            `json:"delete"`
	Transform        *DocumentTransform `json:"transform"`
	Update           *Document          `json:"update"`
	UpdateMask       *DocumentMask      `json:"updateMask"`
	UpdateTransforms []FieldTransform   `json:"updateTransforms"`
}
