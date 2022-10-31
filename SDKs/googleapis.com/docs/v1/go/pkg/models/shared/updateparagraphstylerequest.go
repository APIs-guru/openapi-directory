package shared



type UpdateParagraphStyleRequest struct {
    Fields *string `json:"fields,omitempty"`
    ParagraphStyle *ParagraphStyle `json:"paragraphStyle,omitempty"`
    Range *Range `json:"range,omitempty"`
    
}

