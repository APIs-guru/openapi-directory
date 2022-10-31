package shared

type Header struct {
	Content  []StructuralElement `json:"content,omitempty"`
	HeaderID *string             `json:"headerId,omitempty"`
}
