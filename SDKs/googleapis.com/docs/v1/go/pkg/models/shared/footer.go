package shared

// Footer
// A document footer.
type Footer struct {
	Content  []StructuralElement `json:"content,omitempty"`
	FooterID *string             `json:"footerId,omitempty"`
}

// FooterInput
// A document footer.
type FooterInput struct {
	Content  []StructuralElementInput `json:"content,omitempty"`
	FooterID *string                  `json:"footerId,omitempty"`
}
