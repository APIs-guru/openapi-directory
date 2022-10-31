package shared



type ParagraphMarker struct {
    Bullet *Bullet `json:"bullet,omitempty"`
    Style *ParagraphStyle `json:"style,omitempty"`
    
}

