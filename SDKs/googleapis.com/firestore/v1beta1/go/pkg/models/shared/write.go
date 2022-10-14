package shared

type Write struct {
	CurrentDocument  *Precondition      `json:"currentDocument,omitempty"`
	Delete           *string            `json:"delete,omitempty"`
	Transform        *DocumentTransform `json:"transform,omitempty"`
	Update           *Document          `json:"update,omitempty"`
	UpdateMask       *DocumentMask      `json:"updateMask,omitempty"`
	UpdateTransforms []FieldTransform   `json:"updateTransforms,omitempty"`
}
