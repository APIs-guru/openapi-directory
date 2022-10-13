package shared

type Footer struct {
	Content  []StructuralElement `json:"content"`
	FooterID *string             `json:"footerId"`
}
