package shared

// Header
// A document header.
type Header struct {
	Content  []StructuralElement `json:"content,omitempty"`
	HeaderID *string             `json:"headerId,omitempty"`
}

// HeaderInput
// A document header.
type HeaderInput struct {
	Content  []StructuralElementInput `json:"content,omitempty"`
	HeaderID *string                  `json:"headerId,omitempty"`
}
