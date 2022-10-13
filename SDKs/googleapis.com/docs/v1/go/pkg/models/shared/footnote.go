package shared

type Footnote struct {
	Content    []StructuralElement `json:"content"`
	FootnoteID *string             `json:"footnoteId"`
}
