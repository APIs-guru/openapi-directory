package shared



type Footnote struct {
    Content []StructuralElement `json:"content,omitempty"`
    FootnoteID *string `json:"footnoteId,omitempty"`
    
}

