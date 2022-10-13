package shared

type Header struct {
	Content  []StructuralElement `json:"content"`
	HeaderID *string             `json:"headerId"`
}
