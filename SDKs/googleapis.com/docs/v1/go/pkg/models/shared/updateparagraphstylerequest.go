package shared

type UpdateParagraphStyleRequest struct {
	Fields         *string         `json:"fields"`
	ParagraphStyle *ParagraphStyle `json:"paragraphStyle"`
	Range          *Range          `json:"range"`
}
