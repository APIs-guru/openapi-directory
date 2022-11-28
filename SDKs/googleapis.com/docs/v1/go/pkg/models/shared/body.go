package shared

// BodyInput
// The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
type BodyInput struct {
	Content []StructuralElementInput `json:"content,omitempty"`
}

// Body
// The document body. The body typically contains the full document contents except for headers, footers, and footnotes.
type Body struct {
	Content []StructuralElement `json:"content,omitempty"`
}
